import { createDotPlot } from "@/graph/plotters/dotplot";
import { GraphTypeData } from "@/graph/types";

export default {
  "dot-plot": {
    name: "Dot Plot (& Box & Whisker)",
    func: createDotPlot,
    settings: [
      { key: "point-size", name: "Point Size", type: "slider", min: 3, max: 19, step: 1, default: 7 },
      { key: "point-transparency", name: "Point Transparency", type: "slider", min: 0, max: 10, step: 0.1, default: 5 },
      { key: "sum", name: "Summaries", type: "toggle" },
      { key: "sum-text-size", name: "Summary Text Size", type: "slider", min: 5, max: 25, step: 1, default: 13 },
      { key: "box-plot", name: "Box Plots", type: "toggle" },
      { key: "strip-graph", name: "Strip Graph", type: "toggle" },
      { key: "high-box-plot", name: "High Box Plot", type: "toggle" },
      { key: "box-no-whisker", name: "Box (No Whisker)", type: "toggle" },
      { key: "box-no-outlier", name: "Box (No Outlier)", type: "toggle" },
      { key: "informal-ci", name: "Informal C-I", type: "toggle" },
      { key: "ci-limits", name: "C-I Limits", type: "toggle" },
      { key: "point-labels", name: "Point Labels", type: "toggle" },
      { key: "mean-dot", name: "Mean Dot", type: "toggle" },
      { key: "stack-dots", name: "Stack Dots", type: "toggle", default: true },
      { key: "grid-lines", name: "Grid Lines", type: "toggle", default: true },
      { key: "invert-colours", name: "Invert Colours", type: "toggle" },
      { key: "thick-lines", name: "Thick Lines", type: "toggle" },
      { key: "show-removed", name: "Show row of removed points", type: "toggle", default: true },
    ]
  },
  "pairs-plot": {
    name: "Pairs Plot",
    func: createDotPlot,
    settings: []
  },
  "bar-graph": {
    name: "Bar Graph",
    func: createDotPlot,
    settings: []
  },
  "histogram": {
    name: "Histogram",
    func: createDotPlot,
    settings: []

  },
  "pie-chart": {
    name: "Pie Chart",
    func: createDotPlot,
    settings: []

  },
  "scatter-graph": {
    name: "Scatter Graph",
    func: createDotPlot,
    settings: []
  },
} as { [key: string]: GraphTypeData };