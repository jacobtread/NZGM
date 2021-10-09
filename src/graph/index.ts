import { DataGroups, SettingDefinition, Settings } from "@/graph/types";
import store, { RowData, RowGroup } from "@/store";
import { isNumeric } from "@/tools";

export function addDefaultSettings(definitions: SettingDefinition[]) {
  const output: Settings = store.state.graph.settings;
  for (const def of definitions) {
    if (output.values[def.key] !== undefined) continue;
    output.values[def.key] = (
      def.type == "toggle" ?
        (def.default ?? false) : (
          def.type == "slider" ? (def.default ?? def.min ?? 0) : undefined
        )
    );
  }
}

function isEmptyRow(row: RowGroup): boolean {
  const cols: string[] = store.state.cols;
  for (const index in cols) {
    if (row[index] == undefined) continue;
    else {
      const value = row[index];
      if (typeof value == "string" && value.length < 1) continue;
      return false;
    }
  }
  return true;
}

export function dataFromIndexes(indexes: number[], data: number[]): number[] {
  const output: number[] = [];
  for (const index of indexes) {
    if (data[index] == undefined) continue;
    output.push(data[index]);
  }
  return output;
}

export function splitData(
  data: RowGroup,
  maxGroups: number,
  min: number,
  max: number
): DataGroups {
  if (data.length == 0) return {}; /* Ignore empty data */

  let uniqueGroups: DataGroups = {}
  for (const index in data) {
    const value: string | number = data[index];
    if (uniqueGroups[value] == undefined) uniqueGroups[value] = []
    uniqueGroups[value].push(parseInt(index));
  }
  const groups: string[] = Object.keys(uniqueGroups);
  if (groups.length > maxGroups) {
    if (maxGroups < 4) {
      console.error("SEL 1")
      //ERR SELECT CATEGORICAL OR NUMERICAL FOR VAR WITH MAX OR FEWER GROUPS
      return {};
    }
    if (!isNumeric(groups[0])) {
      console.error("SEL 2")
      // ERR SELECT CATEGORICAL VAR WITH MAX OR FEWER GROUPS OR NUMERICAL VAR
      return {};
    } else {
      const groupSize: number = (max - min /* Difference */) / 4 /* Four Groups */;
      const firstGroupMax: number = floatp(min + groupSize, 2);
      const secondGroupMax: number = floatp(min + (groupSize * 2), 2);
      const thirdGroupMax: number = floatp(min + (groupSize * 3), 2);
      uniqueGroups = {}; /* Reset unique groups */
      for (const index in data) {
        let value = data[index];
        let group: string | number = value;
        if (isNumeric(value)) {
          if (typeof value == "string") value = parseFloat(value);
          if (value < firstGroupMax) group = `a: < ${firstGroupMax}`
          else if (value < secondGroupMax) group = `b: ${firstGroupMax} - ${secondGroupMax}`
          else if (value < thirdGroupMax) group = `c: ${secondGroupMax} - ${thirdGroupMax}`
          else group = `d: > ${thirdGroupMax}`;
        } else group = 'invalid';
        if (uniqueGroups[group] == undefined) uniqueGroups[group] = [];
        else uniqueGroups[group].push(parseInt(index));
      }
    }
  }
  return uniqueGroups;
}

export function numericMin(values: RowGroup): number {
  if (values.length == 0) return 0;
  let minValue = -1;
  for (const value of values) {
    if (typeof value == "number" && (minValue == -1 || value < minValue)) minValue = value;
    else if (typeof value == "string") {
      const number: number = parseFloat(value);
      if (minValue == -1 || number < minValue) minValue = number;
    }
  }
  return minValue;
}

export function numericMax(values: RowGroup): number {
  if (values.length == 0) return 0;
  let maxValue = 0;
  for (const value of values) {
    if (typeof value == "number" && value > maxValue) maxValue = value;
    else if (typeof value == "string") {
      const number: number = parseFloat(value);
      if (number > maxValue) maxValue = number;
    }
  }
  return maxValue;
}

export function getColumnData(column: number): [RowGroup, number[]] {
  if (column == -1) return [[], []]; /* Ignore none columns */
  const rows: RowData[][] = store.state.rows;
  const values: RowGroup = [];
  const skipped: number[] = [];
  for (let index = 0; index < rows.length; index++) {
    const row: RowGroup = rows[index];
    const value: RowData = row[column];
    if (isEmptyRow(row)) continue;
    if (value == undefined) {
      /* Column not defined */
      skipped.push(index);
    } else {
      values.push(value)
    }
  }
  return [values, skipped];
}

export function getColumnDataNumeric(column: number): [number[], number[]] {
  if (column == -1) return [[], []]; /* Ignore none columns */
  const rows: RowData[][] = store.state.rows;
  const values: number[] = [];
  const skipped: number[] = [];
  for (let index = 0; index < rows.length; index++) {
    const row: RowGroup = rows[index];
    const value: RowData = row[column];
    if (isEmptyRow(row)) continue;
    if (value == undefined || !isNumeric(value)) {
      /* Column not defined */
      skipped.push(index);
    } else {
      values.push(float(value));
    }
  }
  return [values, skipped];
}

export function sortFirstNumber(as: string, bs: string) {
  if (as == bs) return 0;
  const regex = /(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g;
  const aMatch = as.toLowerCase().match(regex);
  const bMatch = bs.toLowerCase().match(regex);
  let i = 0;
  if (aMatch == null) return -1;
  const length = aMatch == null ? 0 : aMatch.length;
  if (bMatch == null) return 1;
  while (i < length) {
    if (!bMatch[i]) return 1;
    const aValue: number = parseFloat(aMatch[i]);
    const bValue: number = parseFloat(bMatch[i]);
    if (aValue == bValue || isNaN(aValue) || isNaN(bValue)) {
      i++;
      continue;
    }
    const diff = aValue - bValue;
    if (!isNaN(diff)) return diff;
    return aValue > bValue ? 1 : -1;
  }
  return bMatch[i] ? -1 : 0;
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
  return intf(number)
}

export function axisMinMaxStep(min: number, max: number): [number, number, number] {
  if (min == max) {
    min += 1;
    max += 1;
  }
  const range: number = max - min;
  const rangeRound: number = floatp(range, 1);
  let steps: number = firstSF(rangeRound);
  if (steps < 2) steps *= 10;
  if (steps < 3) steps *= 5;
  if (steps < 5) steps *= 2;
  let step: number = floatp(rangeRound / steps, 15);
  if (step == 0) step = 1;
  let minTick: number = intf(min / step) * step;
  if (minTick > min) minTick -= step;
  let maxTick: number = intf(max / step) * step;
  if (minTick < min) maxTick += step;
  if (maxTick == minTick) {
    maxTick++;
    minTick--;
  }
  return [minTick, maxTick, step];
}

export function scale(value: number): number {
  return value * store.state.graph.scaleFactor;
}

export function invScale(value: number): number {
  return value / store.state.graph.scaleFactor;
}

export function float(value: string | number): number {
  if (typeof value == "number") return value;
  else return parseFloat(value);
}

export function floatp(value: number, precision: number): number {
  return parseFloat(value.toPrecision(precision));
}

export function int(value: string | number): number {
  if (typeof value == "number") return value;
  else return parseFloat(value);
}

export function intf(value: number): number {
  return parseInt(value.toFixed(0));
}

export function dataToPixel(data: number, min: number, max: number, minPx: number, maxPx: number): number {
  return (data - min) / (max - min) * (maxPx - minPx) + minPx;
}

export function text(
  ctx: CanvasRenderingContext2D,
  text: string,
  size: number,
  x: number,
  y: number,
  align: CanvasTextAlign = "left",
  fill = "#000000"
) {
  ctx.fillStyle = fill;
  ctx.font = `bold ${scale(size)}px Arial`;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
}

export function line(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

export function box(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  ctx.beginPath();
  ctx.rect(x1, y1, x2 - x1, y2 - y1);
  ctx.stroke();
}

export function watermark(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  text(ctx, "Made with NZGM", 13, scale(10), height - scale(10), "left");
  text(ctx, "jacobtread.github.io/NZGM", 13, width - scale(10), height - scale(10), "right");
}