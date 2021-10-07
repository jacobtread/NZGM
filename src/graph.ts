import { lowerQuartile, maxNoOutliers, mean, median, minNoOutliers, random, standardDeviation, upperQuartile } from "./math";
import store, { GraphData, RowData } from "./store";
import { axisMinMaxStep, isNumeric } from "./tools";

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

export type PlottingFunction = (ctx: CanvasRenderingContext2D, settings: Settings) => void;

export type GraphTypeData = {
  name: string;
  func: PlottingFunction;
  settings: SettingDefinition[];
}

export type SettingDefinition = {
  key: string;
  name: string;
  type: 'toggle' | 'slider';
  min?: number;
  max?: number;
  step?: number;
  default?: string | boolean | number;
}

export type Settings = {
  values: {
    [key: string]: string | boolean | number;
  };
  bool(name: string): boolean;
  str(name: string): string;
  num(name: string): number;
}

export function addDefaultSettings(definitions: SettingDefinition[]) {
  const output = store.state.graph.settings;
  for (const def of definitions) {
    if (output.values[def.key] !== undefined) continue;
    if (def.type == 'toggle') {
      output.values[def.key] = def.default ?? false;
    } else if (def.type == 'slider') {
      output.values[def.key] = def.default ?? def.min ?? 0;
    }
  }
}

export const graphs: { [key: string]: GraphTypeData } = {
  'dot-plot': {
    name: 'Dot Plot (& Box & Whisker)',
    func: createDotPlot,
    settings: [
      { key: 'sum', name: 'Summaries', type: 'toggle' },
      { key: 'box-plot', name: 'Box Plots', type: 'toggle' },
      { key: 'strip-graph', name: 'Strip Graph', type: 'toggle' },
      { key: 'high-box-plot', name: 'High Box Plot', type: 'toggle' },
      { key: 'box-no-whisker', name: 'Box (No Whisker)', type: 'toggle' },
      { key: 'box-no-outlier', name: 'Box (No Outlier)', type: 'toggle' },
      { key: 'informal-ci', name: 'Informal C-I', type: 'toggle' },
      { key: 'ci-limits', name: 'C-I Limits', type: 'toggle' },
      { key: 'point-labels', name: 'Point Labels', type: 'toggle' },
      { key: 'mean-dot', name: 'Mean Dot', type: 'toggle' },
      { key: 'stack-dots', name: 'Stack Dots', type: 'toggle' },
      { key: 'gridlines', name: 'Gridlines', type: 'toggle' },
      { key: 'invert-colours', name: 'Invert Colours', type: 'toggle' },
      { key: 'thick-lines', name: 'Thick Lines', type: 'toggle' },
      { key: 'show-removed', name: 'Show ID of removed points', type: 'toggle' },
      { key: 'min', name: 'Min', type: 'slider' },
      { key: 'max', name: 'Max', type: 'slider' },
      { key: 'text-size', name: 'Text Size', type: 'slider' },
    ]
  },
  'pairs-plot': {
    name: 'Pairs Plot',
    func: createDotPlot,
    settings: []
  },
  'bar-graph': {
    name: 'Bar Graph',
    func: createDotPlot,
    settings: []
  },
  'histogram': {
    name: 'Histogram',
    func: createDotPlot,
    settings: []

  },
  'pie-chart': {
    name: 'Pie Chart',
    func: createDotPlot,
    settings: []

  },
  'scatter-graph': {
    name: 'Scatter Graph',
    func: createDotPlot,
    settings: []
  },
};

let scaleFactor: number;
let settings: Settings;

export function createDotPlot(ctx: CanvasRenderingContext2D, settings: Settings): void {
  const width: number = ctx.canvas.width;
  const height: number = ctx.canvas.height;

  const graphData: GraphData = store.state.graph;
  scaleFactor = graphData.scaleFactor;
  settings = graphData.settings;

  const xAxis: number = graphData.xAxis;
  const yAxis: number = graphData.yAxis;
  const zAxis: number = graphData.zAxis;

  const cols: string[] = store.state.cols;

  const xPoints: number[] = getDataForCol(xAxis) as number[];
  const yPoints: RowData[] = getDataForCol(yAxis);
  const zPoints: RowData[] = getDataForCol(zAxis);

  const [points, pointsRemoved] = getNumericPoints(xAxis)
  const allPoints: number[] = [...points];
  const left = 90 * scaleFactor;
  const right = width - 60 * scaleFactor;

  if (points.length == 0) {
    ctx.fillStyle = "#FF0000";
    ctx.font = `bold ${20 * scaleFactor}px Arial`;
    ctx.textAlign = "center";
    ctx.fillText("No Numeric Data Selected", width / 2, height / 2 - 45 * scaleFactor);
    ctx.fillStyle = "#666666";
    ctx.font = `bold ${15 * scaleFactor}px Arial`;
    ctx.fillText("the 𝑥 axis requires numeric data", width / 2, height / 2 - 15 * scaleFactor);
    ctx.fillText("to render a graph", width / 2, height / 2 + 15 * scaleFactor);
    return;
  }

  if (pointsRemoved.length != 0) {
    ctx.fillStyle = "#FF0000";
    ctx.font = `bold ${10 * scaleFactor}px Arial`;
    ctx.textAlign = "left";
    ctx.fillText("Some non numeric data was present", left, 30 * scaleFactor);
    ctx.fillText("at the following rows:", left, 45 * scaleFactor);
    ctx.fillStyle = "#666666";
    let y = 60 * scaleFactor;
    for (const point of pointsRemoved) {
      ctx.fillText(point + " = " + xPoints[point], left, y);
      y += 15 * scaleFactor;
    }
    // TODO: Removed points logic
  }

  const oYPixel: number = height - 60 * scaleFactor;
  const maxHeight = height - 120 * scaleFactor;
  const xMin = Math.min(...xPoints);
  const xMax = Math.max(...xPoints);


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
  xPoints: number[],
  yPoints: RowData[],
  yGroups: GroupsData | null
) {
  ctx.strokeStyle = '#000000';
  axisHorizontal(ctx, left, right, oYPixel + 10 * scaleFactor, minXTick, maxXTick, xStep);
  if (yPoints.length > 0) {
    if (yGroups == null) return;
    const groups = Object.keys(yGroups);
    groups.sort(sortOrder).reverse();

    const gMaxHeight = maxHeight / groups.length;
    for (const group of groups) {
      const points = yGroups[group];
      if (points) {
        plotDotPlot(ctx, points as number[], xPoints, minXTick, maxXTick, oYPixel, left, right, maxHeight)
      }
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${15 * scaleFactor}px Arial`;
      ctx.textAlign = "right";
      ctx.fillText(group, right + 10 * scaleFactor, oYPixel - gMaxHeight / 2);
      oYPixel -= gMaxHeight;
    }
  } else {
    plotDotPlot(ctx, points, xPoints, minXTick, maxXTick, oYPixel, left, right, maxHeight)
  }
}

function plotDotPlot(
  ctx: CanvasRenderingContext2D,
  indexes: number[],
  values: number[],
  minXTick: number,
  maxXTick: number,
  oYPixel: number,
  left: number,
  right: number,
  maxHeight: number,
  sort = 2,
  map = 1,
) {
  ctx.lineWidth = 2 * scaleFactor;

  const stripGraph = false; // TODO: REPLACE WITH SETTINGS
  const stackedDots = true; // TODO: REPLACE WITH SETTINGS
  const labels = false; // TODO: REPLACE WITH SETTINGS

  const size = 7;
  const radius = size / 2 * scaleFactor

  const xValues = [];
  const xPixels = [];

  for (const index of indexes) {
    xValues.push(index);
    const value = values[index];
    const rawPixel = convertValToPixel(value, minXTick, maxXTick, left, right);
    let xPixel;
    if (stackedDots) {
      xPixel = Math.floor(rawPixel / (radius * 2)) * radius * 2;
    } else {
      xPixel = Math.floor(rawPixel / (radius * 3)) * radius * 3;
    }
    xPixels.push([index, xPixel, rawPixel, value])
  }

  const lq = lowerQuartile(values);
  const uq = upperQuartile(values);
  const med = median(values);
  const _mean = mean(values);

  const minValue = parseFloat(Math.min(...values).toPrecision(10))
  const maxValue = parseFloat(Math.max(...values).toPrecision(10))

  const minNO = minNoOutliers(values, lq, uq);
  const maxNO = maxNoOutliers(values, lq, uq);

  const sd = standardDeviation(values);

  const num = values.length;

  const counts: { [key: number]: number } = {};
  for (const [xPixel] of xPixels) {
    if (counts[xPixel]) {
      counts[xPixel] += 1;
    } else {
      counts[xPixel] = 1;
    }
  }

  const maxPoints = Math.max(...Object.values(counts));
  let yPixel = oYPixel;
  let lastXPixel = 0;
  let lastYPixel = 0;
  let yHeight = radius * 2;
  if ((maxHeight - (10 * scaleFactor)) / maxPoints < yHeight) {
    yHeight = (maxHeight - (10 * scaleFactor)) / maxPoints;
  }
  xPixels.sort((a, b) => a[sort] - b[sort]);
  let highestkey = -1;

  for (const [index, xPixel, rawPixel, value] of xPixels) {
    ctx.beginPath();
    if (lastXPixel == xPixel) {
      yPixel = yPixel - yHeight;
    } else {
      yPixel = oYPixel - (10 * scaleFactor);
    }

    if (stripGraph) {
      yPixel = random(
        oYPixel - (10 * scaleFactor),
        oYPixel - maxHeight + (10 * screenLeft) + maxHeight * 0.5
      );
    }

    lastXPixel = xPixel;

    if (index > highestkey) {
      lastYPixel = yPixel;
      highestkey = index;
    }

    ctx.strokeStyle = '#000000';
    ctx.arc(rawPixel, yPixel, radius, 0, 2 * Math.PI);
    ctx.stroke();


    if (map) {
      const map: HTMLMapElement = document.getElementById(
        "canvasMap"
      ) as HTMLMapElement;
      const area: HTMLAreaElement = document.createElement('area');
      area.shape = 'circle';
      area.coords = `${(rawPixel / scaleFactor)},${yPixel / scaleFactor},${radius / scaleFactor}`
      area.alt = `${index}`;
      map.appendChild(area);
    }

    if (labels) {
      ctx.fillStyle = "#0000FF";
      ctx.font = `bold ${10 * scaleFactor}px Arial`;
      ctx.textAlign = "left";
      ctx.fillText(`${value + 1}`, rawPixel + radius + (2 * scaleFactor), yPixel + (4 * scaleFactor))
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
    if (value === undefined && index == rows.length - 1) continue;
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
  const gridLines = true; // TODO: REPLACE WITH SETTINGS
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

