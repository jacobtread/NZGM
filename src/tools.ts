import axios, { AxiosResponse } from "axios";
import store from "./store";

export function importFromCSV(file: string): void {
    const lines: string[] = file.split("\n");
    let header = true;
    if (lines.length < 1) return;
    store.state.rows = []; // Clear rows;
    for (const line of lines) {
        const parts: string[] = line.split(',');
        if (header) {
            store.state.cols = parts;
            header = false;
        } else {
            store.state.rows.push(parts);
        }
    }
}
export async function importCSVFromURL(url: string): Promise<void> {
    try {
        const response: AxiosResponse = await axios.get(url);
        const data = response.data;
        importFromCSV(data);
    } catch (e) {
        alert('Failed to load contents from ' + url)
    }
}