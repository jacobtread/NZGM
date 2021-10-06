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

function getGraphType(type: GraphType): GraphTypeData | null {
  for (const graph of graphs) {
    if (graph.type == type) {
      return graph;
    }
  }
  return null;
}

export function dotPlot(ctx: CanvasRenderingContext2D): void {
  const width: number = ctx.canvas.width;
  const height: number = ctx.canvas.height;

  const graphData: GraphData = store.state.graph;
  const scaleFactor: number = graphData.scaleFactor;
  const xAxis: number = graphData.xAxis;
  const yAxis: number = graphData.yAxis;

  const rows: RowData[][] = store.state.rows;
  const cols: string[] = store.state.cols;

  const points: number[] = []
  const allPoints: number[] = [];
  const pointsRemoved: number[] = [];

  for (let index = 0; index < rows.length; index++) {
    const row = rows[index];
    const value = row[xAxis];
    if (isNumeric(value)) {
      points.push(index);
      allPoints.push(index);
    } else {
      pointsRemoved.push(index);
    }
  }

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

  const xMin = Math.min.apply(null, points);
  const xMax = Math.max.apply(null, points);

  // TODO: Use min max settings
  const [min, max, step] = axisMinMaxStep(xMin, xMax);
  const alpha = 255;

  // TODO : OTHER AXIES

  // Graph Title
  ctx.fillStyle = "#000000";
  ctx.font = `bold ${20 * scaleFactor}px Arial`;
  ctx.textAlign = "center";
  ctx.fillText(graphData.title, width / 2, 30 * scaleFactor);

  // X-Axis Title
  ctx.font = `bold ${15 * scaleFactor}px Arial`;
  ctx.fillText(cols[xAxis], width / 2,  height * 0.5 - 10 * scaleFactor);

}

function axisMinMaxStep(min: number, max: number): [number, number, number] {
  if (min == max) {
    min += 1;
    max += 1;
  }
  const range = max - min;
  const rangeRound: number = parseInt(range.toPrecision(1));
  let steps: number = firstSF(rangeRound);
  if (steps < 2) steps *= 10;
  if (steps < 3) steps *= 5;
  if (steps < 5) steps *= 2;
  let step = parseFloat((rangeRound / steps).toPrecision(15));
  if (step == 0) step = 1;
  let minTick = parseFloat((min / step).toFixed(0)) * step;
  if (minTick > min) minTick -= step;
  let maxTick = parseFloat((max / step).toFixed(0)) * step;
  if (minTick < min) maxTick += step;
  if (maxTick == minTick) {
    maxTick++;
    minTick--;
  }
  return [minTick, maxTick, step];
}

function firstSF /* First Significant Figure */(number: number): number {
  let multiplier = 1;
  if (number == 0) return 0;
  while (number < 0.1) {
    number *= 10;
    multiplier /= 10;
  }
  while (number >= 1) {
    number /= 10;
    multiplier *= 10;
  }
  number = number * 10;
  return parseInt(number.toFixed(0))
}
