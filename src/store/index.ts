import { GraphType } from "@/graph";
import { createStore } from "vuex";

export type RowData = string | number | boolean;

export type GraphData = {
  type: GraphType | 'none';
  xAxis: number;
  yAxis: number;
  size: number;
  scaleFactor: number;
}

export type State = {
  rows: RowData[][];
  cols: string[];
  graph: GraphData;
}

export default createStore<State>({
  state: {
    cols: ['', ''],
    rows: [['', '']],
    graph: {
      type: 'none',
      xAxis: 0,
      yAxis: -1,
      size: 0,
      scaleFactor: 1
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
