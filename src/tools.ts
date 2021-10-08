import axios, { AxiosResponse } from "axios";
import { floatp, intf } from "./graph";
import store from "./store";

export function importFromCSV(file: string): void {
  showLoader("Importing Content")
  const lines: string[] = file.split("\n");
  let header = true;
  if (lines.length < 1) return;
  store.state.rows = []; // Clear rows;
  for (const line of lines) {
    const parts: string[] = line.split(",");
    if (header) {
      store.state.cols = parts;
      header = false;
    } else {
      store.state.rows.push(parts);
    }
  }
  hideLoader()
}

export function showLoader(message: string) {
  store.state.loading.show = true;
  store.state.loading.message = message;
}

export function hideLoader() {
  store.state.loading.show = false;
}

export async function importCSVFromURL(url: string): Promise<void> {
  try {
    showLoader("Importing Content")
    const response: AxiosResponse = await axios.get(url);
    const data = response.data;
    importFromCSV(data);
  } catch (e) {
    alert("Failed to load contents from " + url)
  }
  hideLoader();
}

export function isNumeric(/* eslint-disable */ value: any): boolean {
  return value !== undefined && (typeof value === "number" || /^-?\d+$/.test(value));
}
