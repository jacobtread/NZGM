export function median(values: number[]): number {
  return quantile(values, 0.5);
}

export function sum(values: number[]): number {
  return values.reduce((a, b) => a + b, 0);
}

export function mean(values: number[]): number {
  return sum(values) / values.length;
}

export function lowerQuartile(values: number[]): number {
  return quantile(values, 0.25);
}

export function upperQuartile(values: number[]): number {
  return quantile(values, 0.75);
}

export function standardDeviation(values: number[]): number {
  const _mean: number = mean(values);
  const squareDiffs = values.map(a => (a - _mean) ** 2);
  return Math.sqrt(
    sum(squareDiffs) / (values.length - 1)
  );
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