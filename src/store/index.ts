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

export type ContentData = {
  cols: string[],
  rows: RowData[][]
}

export type LoadingData = {
  show: boolean;
  message: string;
}

export type ToastType = "info" | "warn" | "error";

export type Toast = {
  id: number;
  text: string;
  duration: number;
  type: ToastType;
  timeout?: number;
}

export type State = {
  data: ContentData;
  graph: GraphData;
  loading: LoadingData;
  toasts: Toast[];
}

export default createStore<State>({
  state: {
    data: {
      cols: ["", ""],
      rows: [["", ""]],
    },
    loading: {
      show: false,
      message: ""
    },
    toasts: [],
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
