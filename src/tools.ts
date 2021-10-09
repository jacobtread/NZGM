import axios, { AxiosResponse } from "axios";
import store, { ContentData } from "./store";

export function importFromCSV(file: string): void {
  showLoader("Importing Content")
  const lines: string[] = file.split("\n");
  const data: ContentData = store.state.data;
  let header = true;
  if (lines.length < 1) return;
  data.rows = []; // Clear rows;
  for (const line of lines) {
    const parts: string[] = line.split(",");
    if (header) {
      data.cols = parts;
      header = false;
    } else {
      data.rows.push(parts);
    }
  }
  hideLoader()
}

export function importFromFile(): void {
  const element: HTMLInputElement = document.createElement('input');
  element.type = "file";
  element.style.display = "none";
  element.click();
  element.onchange = () => {
    showLoader("Loading File");
    const files: FileList | null = element.files;
    if (files == null || files.length < 1) return;
    const file: File = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (!event.target) return alert("Failed to load file!");
      const content = event.target.result as string;
      importFromCSV(content);
      const rows = store.state.data.rows;
      alert(`Imported ${rows.length}row(s)`);
    };
  }
}

export function showLoader(message: string): void {
  store.state.loading.show = true;
  store.state.loading.message = message;
}

export function hideLoader(): void {
  store.state.loading.show = false;
}

export async function importCSVFromURL(url: string): Promise<void> {
  try {
    showLoader("Importing Content")
    const response: AxiosResponse<string> = await axios.get(url);
    const data: string = response.data;
    importFromCSV(data);
  } catch (e) {
    alert("Failed to load contents from " + url)
  }
  hideLoader();
}

export function isNumeric(value: string | number): boolean {
  return value !== undefined && (typeof value === "number" || /^-?\d+$/.test(value));
}
