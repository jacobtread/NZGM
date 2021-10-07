import store, { GraphData, RowData } from "./store";
import { isNumeric } from "./tools";

export type GraphType = 'pairs-plot'
  | 'dot-plot'
  | 'bar-graph'
  | 'bar-graph-summary'
  | 'histogram'
  | 'histogram-summary '
  | 'pie-chart'
  | 'scatter-graph'
  | 'residuals-plot'
  | 'time-series';

export type PlottingFunction = (ctx: CanvasRenderingContext2D) => void;

export type Setting = { name: string; value: boolean | number | string }

export type GraphTypeData = {
  name: string;
  type: GraphType;
  func: PlottingFunction;
  settings: Setting[];
}

export const graphs: GraphTypeData[] = [
  {
    name: 'Dot Plot (& Box & Whisker)',
    type: 'dot-plot',
    func: dotPlot,
    settings: [
      { name: 'Summaries', value: false },
      { name: 'Box Plots', value: false },
      { name: 'Strip Graph', value: false },
      { name: 'High Box Plot', value: false },
      { name: 'Box (No Whisker)', value: false },
      { name: 'Box (No Outlier)', value: false },
      { name: 'Informal C-I', value: false },
      { name: 'C-I Limits', value: false },
      { name: 'Point Labels', value: false },
      { name: 'Mean Dot', value: false },
      { name: 'Stack Dots', value: false },
      { name: 'Gridlines', value: false },
      { name: 'Invert Colours', value: false },
      { name: 'Thick Lines', value: false },
      { name: 'Show ID of removed points', value: false },
      { name: 'Min', value: -1 },
      { name: 'Max', value: -1 },
      { name: 'Text Size', value: 13 },
    ]
  },
  {
    name: 'Pairs Plot',
    type: 'pairs-plot',
    func: dotPlot,
    settings: []
  },
  {
    name: 'Bar Graph',
    type: 'bar-graph',
    func: dotPlot,
    settings: []
  },
  {
    name: 'Histogram',
    type: 'histogram',
    func: dotPlot,
    settings: []

  },
  {
    name: 'Pie Chart',
    type: 'pie-chart',
    func: dotPlot,
    settings: []

  },
  {
    name: 'Scatter Graph',
    type: 'scatter-graph',
    func: dotPlot,
    settings: []
  },
];

let scaleFactor: number;

export function dotPlot(ctx: CanvasRenderingContext2D): void {
  const width: number = ctx.canvas.width;
  const height: number = ctx.canvas.height;

  const graphData: GraphData = store.state.graph;
  scaleFactor = graphData.scaleFactor;

  const xAxis: number = graphData.xAxis;
  const yAxis: number = graphData.yAxis;
  const zAxis: number = graphData.zAxis;

  const cols: string[] = store.state.cols;

  const xPoints: RowData[] = getDataForCol(xAxis);
  const yPoints: RowData[] = getDataForCol(yAxis);
  const zPoints: RowData[] = getDataForCol(zAxis);

  const [points, pointsRemoved] = getNumericPoints(xAxis)
  const allPoints: number[] = [...points];

  if (points.length == 0) {
    return;
    // TODO: Implement fail
  }

  if (pointsRemoved.length != 0) {
    // TODO: Removed points logic
  }

  const oYPixel: number = height - 60 * scaleFactor;
  const maxHeight = height - 120 * scaleFactor;
  const left = 90 * scaleFactor;
  const right = width - 60 * scaleFactor;

  const xNumeric = getDataForCol(xAxis, true) as number[];
  const xMin = Math.min(...xNumeric);
  const xMax = Math.max(...xNumeric);


  // TODO: Use min max settings
  const [min, max, step] = axisMinMaxStep(xMin, xMax);

  // TODO : OTHER AXIES

  // Graph Title
  ctx.fillStyle = "#000000";
  ctx.font = `bold ${20 * scaleFactor}px Arial`;
  ctx.textAlign = "center";
  ctx.fillText(graphData.title, width / 2, 30 * scaleFactor);

  // X-Axis Title
  ctx.font = `bold ${15 * scaleFactor}px Arial`;
  ctx.fillText(cols[xAxis], width / 2, height - (10 * scaleFactor));

  let yGroups: GroupsData | null = null;
  let zGroups: GroupsData | null = null;

  if (yAxis != -1) {
    const differentGroups: GroupsData | null = splitData(allPoints, yPoints, 10, "Category 1");
    if (differentGroups == null) return;
    yGroups = differentGroups;

    const x = 20 * scaleFactor;
    const y = height / 2;
    ctx.save();
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${15 * scaleFactor}px Arial`;
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillText(cols[yAxis], 0, 0);
    ctx.restore();

  }

  if (yGroups != null) {
    if (zAxis != -1) {
      const differentGroups: GroupsData | null = splitData(allPoints, zPoints, 10, "Category 2");
      if (differentGroups == null) return;
      zGroups = differentGroups;
      const groups = Object.keys(zGroups);
      let left = 60 * scaleFactor;
      const eachWidth = (width - 40 * scaleFactor) / groups.length;
      for (let i = 0; i < groups.length; i++) {
        const group: string = groups[i];
        const points: RowData[] = zGroups[group];
        const right = left + eachWidth;
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${15 * scaleFactor}px Arial`;
        ctx.textAlign = "center";
        ctx.fillText(group, (left + (right - 50 * scaleFactor)) / 2, oYPixel - maxHeight);
        plotYSplit(ctx, (left + 30 * scaleFactor), right - 50 * scaleFactor, oYPixel, min, max, step, maxHeight, points as number[], xPoints, yPoints, yGroups);
        left += eachWidth;
      }
    } else {
      plotYSplit(ctx, left, right, oYPixel, min, max, step, maxHeight, points, xPoints, yPoints, yGroups);
    }

  }

  ctx.strokeStyle = '#000000';


  watermark(ctx, width, height)
}

function plotYSplit(
  ctx: CanvasRenderingContext2D,
  left: number,
  right: number,
  oYPixel: number,
  minXTick: number,
  maxXTick: number,
  xStep: number,
  maxHeight: number,
  points: number[],
  xPoints: RowData[],
  yPoints: RowData[],
  yGroups: GroupsData
) {
  ctx.strokeStyle = '#000000';
  axisHorizontal(ctx, left, right, oYPixel + 10 * scaleFactor, minXTick, maxXTick, xStep);
  if (yPoints.length > 0) {
    const groups = Object.keys(yGroups);
    groups.sort(sortOrder).reverse();

    const gMaxHeight = maxHeight / groups.length;
    for (const group of groups) {
      const points = yGroups[group];
      if (points) {
        // TODO: DOT PLOT
      }
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${15 * scaleFactor}px Arial`;
      ctx.textAlign = "right";
      ctx.fillText(group, right + 10 * scaleFactor, oYPixel - gMaxHeight / 2);
      oYPixel -= gMaxHeight;
    }
  }
}


function getDataForCol(col: number, asNumber = false): RowData[] {
  if (col == -1) return [];
  const rows: RowData[][] = store.state.rows;
  const points: RowData[] = []
  for (let index = 0; index < rows.length; index++) {
    const row: RowData[] = rows[index];
    const value: RowData = row[col];
    if (value === undefined) continue;
    if (asNumber && typeof value == 'string') {
      points.push(parseFloat(value));
    } else {
      points.push(value);
    }
  }
  return points
}


function getNumericPoints(axis: number): [number[], number[]] {
  const rows: RowData[][] = store.state.rows;
  const points: number[] = []
  const removed: number[] = []
  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    const value = row[axis];
    if (isNumeric(value)) {
      points.push(index);
    } else {
      removed.push(index);
    }
  }
  return [points, removed]
}

type GroupsData = {
  [key: string]: RowData[]
}

function splitData(points: number[], values: RowData[], max: number, variable: string): GroupsData | null {
  let differentGroups: GroupsData = {};
  for (const index in points) {
    const group: RowData = values[index];
    if (!differentGroups[group]) differentGroups[group] = [];
    differentGroups[group].push(index);
  }
  let groups: string[] = Object.keys(differentGroups);
  if (groups.length > max && !isNumeric(groups[0])) {
    return null; // TODO: ERR SELECT CATEGORICAL VAR WITH MAX OR FEWER GROUPS OR NUMERICAL VAR
  }
  if (groups.length > max && max < 4) {
    return null; // TODO: ERR SELECT CATEGORICAL OR NUMERICAL FOR VAR WITH MAX OR FEWER GROUPS
  }
  if (groups.length > max && isNumeric(groups[0])) {
    const pointsForMinMax: number[] = [];
    for (const index of points) {
      let value: RowData = values[index];
      if (isNumeric(value)) {
        if (typeof value == 'number') pointsForMinMax.push(value);
        else if (typeof value == 'string') {
          value = parseFloat(value);
          pointsForMinMax.push(value);
        }
      }
    }

    const split0: number = Math.min.apply(null, pointsForMinMax);
    const split4: number = Math.max.apply(null, pointsForMinMax);

    const d = (split4 - split0) / 4;

    const c1Max: number = parseFloat((split0 + d).toPrecision(2));
    const c2Max: number = parseFloat((split0 + d * 2).toPrecision(2));
    const c3Max: number = parseFloat((split0 + d * 3).toPrecision(2));
    differentGroups = {}
    for (const index of points) {
      let group: RowData = values[index];
      if (!isNumeric(group)) {
        group = 'invalid';
      } else {
        if (typeof group == 'string') group = parseFloat(group);
        if (group < c1Max) group = 'a: < ' + c1Max;
        else if (group < c2Max) group = 'b: ' + c1Max + ' - ' + c2Max;
        else if (group < c3Max) group = 'c: ' + c2Max + ' - ' + c3Max;
        else group = 'd: > ' + c3Max;
        if (!differentGroups[group]) differentGroups[group] = [];
        differentGroups[group].push(index);
      }
    }
    groups = Object.keys(differentGroups);
  }
  return differentGroups;
}

export function sortOrder(as: string, bs: string) {
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

function line(
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
function convertValToPixel(point: number, min: number, max: number, minPix: number, maxPix: number): number {
  return (point - min) / (max - min) * (maxPix - minPix) + minPix;
}
function axisHorizontal(
  ctx: CanvasRenderingContext2D,
  x1: number,
  x2: number,
  y: number,
  min: number,
  max: number,
  step: number,
  gridLineTop = 50
): void {
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#000000';
  ctx.lineWidth = scaleFactor;
  line(ctx, x1 + (- 10 * scaleFactor), y, x2 + (10 * scaleFactor), y);
  ctx.font = `bold ${13 * scaleFactor}px Arial`;
  let curX: number = parseFloat(min.toPrecision(8));
  const gridLines = true;
  while (curX <= max) {
    const xPixel = convertValToPixel(curX, min, max, x1, x2);
    line(ctx, xPixel, y, xPixel, y + 6 * scaleFactor);
    ctx.fillText('' + curX, xPixel, y + 18 * scaleFactor);
    if (gridLines) {
      ctx.strokeStyle = "#ddd";
      line(ctx, xPixel, gridLineTop, xPixel, y);
      ctx.strokeStyle = "#000";
    }
    curX = parseFloat((curX + step).toPrecision(8));
  }
}

function watermark(ctx: CanvasRenderingContext2D, width: number, height: number): void {
  ctx.fillStyle = "#000000";
  ctx.font = `bold ${13 * scaleFactor}px Arial`;
  ctx.textAlign = "left";
  ctx.fillText("Made with NZGM", 10 * scaleFactor, height - 10 * scaleFactor);
  ctx.textAlign = "right";
  ctx.fillText("jacobtread.github.io/NZGM", width - 10 * scaleFactor, height - 10 * scaleFactor);
}

function axisMinMaxStep(min: number, max: number): [number, number, number] {
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

function firstSF(number: number): number {
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
