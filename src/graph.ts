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

export type PlottingFunction = (ctx: CanvasRenderingContext2D, values: number[], settings: Setting[]) => void;

export type Setting = { name: string; value: boolean }

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

function dotPlot(ctx: CanvasRenderingContext2D): void {
  console.log(ctx)
}