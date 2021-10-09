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
