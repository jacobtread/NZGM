import { createStore } from "vuex";

type RowData = string|number|boolean;

export default createStore({
  state: {
    cols: [] as string[],
    rows: [] as RowData[][]
  },
  mutations: {},
  actions: {},
  modules: {},
});
