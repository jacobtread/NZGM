import { Settings } from "@/graph/types";
import { createStore } from "vuex";

export type RowData = string | number;
export type Column = RowData[];
export type RowGroup = RowData[]

export type GraphData = {
  title: string;
  type: string;
  xAxis: number;
  yAxis: number;
  zAxis: number;
  size: number;
  scaleFactor: number;
  settings: Settings
}

export type State = {
  rows: RowData[][];
  cols: string[];
  graph: GraphData;
  loading: {
    show: boolean;
    message: string;
  }
}

export default createStore<State>({
  state: {
    cols: ["", ""],
    rows: [["", ""]],
    loading: {
      show: false,
      message: ""
    },
    graph: {
      title: "",
      type: "dot-plot",
      xAxis: 0,
      yAxis: -1,
      zAxis: -1,
      size: 0,
      scaleFactor: 1,
      settings: {
        values: {},
        bool(name: string): boolean {
          return (this.values[name] ?? false) as boolean;
        },
        str(name: string): string {
          return (this.values[name] ?? "") as string;
        },
        num(name: string): number {
          return (parseFloat("" + this.values[name] ?? "0")) as number;
        }
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
