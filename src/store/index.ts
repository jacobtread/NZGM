import { createStore } from "vuex";

export type RowData = string|number|boolean;

export type State = {
  rows: RowData[][];
  cols: string[];
}

export default createStore<State>({
  state: {
    cols: ['Example', 'Example'],
    rows: [['', '']]
  },
  mutations: {},
  actions: {},
  modules: {},
});
