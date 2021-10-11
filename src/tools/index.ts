import axios, { AxiosResponse } from "axios";
import store, { ContentData, RowData, ToastType } from "@/store";
import { isEmptyRow } from "@/graph";

export function importFromCSV(file: string): void {
  showLoader("Importing Content")
  const lines: string[] = file.split("\n");
  const data: ContentData = store.state.data;
  let header = true;
  if (lines.length < 1) return;
  data.rows = []; // Clear rows;
  data.selected = { row: -1, col: -1 };
  const splitChar: string = getSplittingChar(file);
  for (const line of lines) {
    if (line.length == 0) continue;
    const parts: string[] = line.split(splitChar);
    if (header) {
      data.cols = parts;
      header = false;
    } else {
      if (parts.length > data.cols.length) {
        data.cols.push(...new Array(parts.length - data.cols.length).fill(''));
      }
      data.rows.push(parts);
    }
  }
  toast(`Imported ${data.rows.length} row(s)`)
  hideLoader()
}

export function getSplittingChar(data: string): string {
  const commas: number = (data.match(/,/g) ?? []).length;
  const semiColons: number = (data.match(/;/g) ?? []).length;
  const tabs: number = (data.match(/\t/g) ?? []).length;
  if (semiColons > tabs && semiColons > commas) {
    return ';';
  } else if (tabs > semiColons && tabs > commas) {
    return '\t';
  } else {
    return ',';
  }
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
    };
  }
}

export async function importFromClipboard(): Promise<void> {
  if ("navigator" in window) {
    showLoader("Loading Clipboard Contents");
    try {
      const text = await navigator.clipboard.readText();
      importFromCSV(text);
    } catch (e) {
      toast("Unable to read contents of clipboard", "error");
      console.error(e);
    }
  }
}

export function dataToCSV(): string {
  const cols: string[] = store.state.data.cols;
  const rows: RowData[][] = store.state.data.rows;
  let output = '';
  for (let index = 0; index < cols.length; index++) {
    output += cols[index];
    if (index < cols.length - 1) {
      output += ',';
    }
  }
  output += '\n'
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row: RowData[] = rows[rowIndex];
    if (isEmptyRow(row)) continue;
    for (let columnIndex = 0; columnIndex < cols.length; columnIndex++) {
      const value = row[columnIndex];
      if (value == undefined) continue;
      output += value;
      if (columnIndex < cols.length - 1) {
        output += ',';
      }
    }
    if (rowIndex < rows.length - 1) {
      output += '\n'
    }
  }
  return output;


}

export function startDownloadBlob(data: Blob, fileName: string): void {
  toast("Starting download for " + fileName);
  const element = document.createElement("a");
  const url = URL.createObjectURL(data);
  element.href = url;
  element.download = fileName;
  document.body.appendChild(element);
  element.click();
  setTimeout(function () {
    document.body.removeChild(element);
    window.URL.revokeObjectURL(url);
  }, 0);
}

export function showLoader(message: string): void {
  store.state.loading.show = true;
  store.state.loading.message = message;
}

export function hideLoader(): void {
  store.state.loading.show = false;
}

export function removeIndexY<T>(values: T[][], index: number): T[][] {
  const output: T[][] = [];
  for (const row of values) {
    if (index == 0) output.push(row.slice(1, values.length));
    else if (index == row.length - 1)
      output.push(row.slice(0, row.length - 1));
    else {
      output.push([
        ...row.slice(0, index),
        ...row.slice(index + 1, row.length),
      ]);
    }
  }
  return output;
}

export function removeIndexX<T>(values: T[], index: number): T[] {
  if (index == 0) return values.slice(1, values.length);
  else if (index == values.length - 1) return values.slice(0, values.length - 1);
  else return [
    ...values.slice(0, index),
    ...values.slice(index + 1, values.length),
  ];
}

export function insertIndexX<T>(value: T, values: T[], index: number): T[] {
  if (index == 0) return [value, ...values];
  else if (index == values.length - 1) return [...values, value];
  else return [
    ...values.slice(0, index + 1),
    value,
    ...values.slice(index + 1, values.length),
  ];
}

export function insertIndexY<T>(value: T, values: T[][], index: number): T[][] {
  const output: T[][] = [];
  for (const row of values) {
    if (index == 0) output.push([value, ...row]);
    else if (index == row.length - 1)
      output.push([...row, value]);
    else {
      output.push([
        ...row.slice(0, index + 1),
        value,
        ...row.slice(index + 1, row.length),
      ]);
    }
  }
  return output;
}

export async function importCSVFromURL(url: string): Promise<void> {
  try {
    showLoader("Importing Content")
    const response: AxiosResponse<string> = await axios.get(url);
    const data: string = response.data;
    importFromCSV(data);
  } catch (e) {
    toast(`Failed to load contents from ${url}`, "error")
  }
  hideLoader();
}

export function isNumeric(value: string | number): boolean {
  return value !== undefined && (typeof value === "number" || /^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$/.test(value));
}

let toastID = 0;

export function toast(text: string, type: ToastType = "info", duration = 2000): void {
  toastID++;
  if (toastID > 100) {
    toastID = 0;
  }
  store.state.toasts.push({ id: toastID, text, type, duration });
}