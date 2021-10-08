import { floatp } from "./graph";

export function median(values: number[]): number {
  const count: number = values.length;
  values.sort((a, b) => a - b);
  const n = count / 2 - 0.5;
  let median: number;
  if (Math.ceil(n) == n) {
    median = values[n];
  } else {
    median = (values[n - 0.5] + values[n + 0.5]) / 2;
  }
  return floatp(median, 10);
}

export function sum(values: number[]): number {
  return values.reduce((a, b) => a + b, 0);
}

export function mean(values: number[]): number {
  return floatp(sum(values) / values.length, 5);
}

export function lowerQuartile(values: number[]): number {
  const count = values.length;
  values.sort((a, b) => a - b);
  const n = (Math.floor(count / 2)) / 2 - 0.5;
  let q: number;
  if (n < 0) { q = median(values); }
  else if (Math.ceil(n) == n) { q = values[n]; }
  else { q = (values[n - 0.5] + values[n + 0.5]) / 2; }
  return floatp(q, 10);
}

export function upperQuartile(values: number[]): number {
  const count = values.length;
  values.sort((a, b) => b - a);
  const n = (Math.floor(count / 2)) / 2 - 0.5;
  let q: number;
  if (n < 0) { q = median(values); }
  else if (Math.ceil(n) == n) { q = values[n]; }
  else { q = (values[n - 0.5] + values[n + 0.5]) / 2; }
  return floatp(q, 10);
}

export function standardDeviation(values: number[]): number {
  const _mean: number = mean(values);
  const squareDiffs = values.map(a => (a - _mean) ** 2);
  return floatp(Math.sqrt(
    sum(squareDiffs) / (values.length - 1)
  ), 5);
}

export function minNoOutliers(values: number[], lq: number, uq: number): number {
  values.sort((a, b) => a - b);
  let min = values[0];
  let i = 0;
  while (i < values.length && min < lq - 1.5 * (uq - lq)) {
    min = values[i];
    i++;
  }
  return min;
}

export function maxNoOutliers(values: number[], lq: number, uq: number): number {
  values.sort((a, b) => b - a);
  let max = values[0];
  let i = 0;
  while (i < values.length && max > uq + 1.5 * (uq - lq)) {
    max = values[i];
    i++;
  }
  return max;
}

export function quantile(values: number[], q: number): number {
  values.sort((a, b) => a - b);
  const pos: number = (values.length - 1) * q;
  const base: number = Math.floor(pos);
  const rest: number = pos - base;
  if (values[base + 1] !== undefined) {
    return values[base] + rest * (values[base + 1] - values[base]);
  } else {
    return values[base];
  }
}

export function random(min: number, max: number) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
