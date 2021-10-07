import axios, { AxiosResponse } from "axios";
import store from "./store";

export function importFromCSV(file: string): void {
  showLoader('Importing Content')
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
    showLoader('Importing Content')
    const response: AxiosResponse = await axios.get(url);
    const data = response.data;
    importFromCSV(data);
  } catch (e) {
    alert('Failed to load contents from ' + url)
  }
  hideLoader();
}

export function isNumeric(/* eslint-disable */ value: any): boolean {
  return value !== undefined && (typeof value === 'number' || /^-?\d+$/.test(value));
}

export function axisMinMaxStep(min: number, max: number): [number, number, number] {
  if (min == max) {
    min += 1;
    max += 1;
  }
  const range = max - min;
  const rangeRound: number = parseFloat(range.toPrecision(1));
  let steps: number = firstSF(rangeRound);
  if (steps < 2) steps *= 10;
  if (steps < 3) steps *= 5;
  if (steps < 5) steps *= 2;
  let step = parseFloat((rangeRound / steps).toPrecision(15));
  if (step == 0) step = 1;
  let minTick = parseInt((min / step).toFixed(0)) * step;
  if (minTick > min) minTick -= step;
  let maxTick = parseInt((max / step).toFixed(0)) * step;
  if (minTick < min) maxTick += step;
  if (maxTick == minTick) {
    maxTick++;
    minTick--;
  }
  return [minTick, maxTick, step];
}

export function firstSF(number: number): number {
  if (number == 0) return 0;
  while (number < 0.1) {
    number *= 10;
  }
  while (number >= 1) {
    number /= 10;
  }
  number *= 10;
  return parseFloat(number.toFixed(0))
}