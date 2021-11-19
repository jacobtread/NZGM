import { ActionContext } from "vuex";

export interface DataState {
    cols: string[],
    rows: string[][],
}


const dataModule = {
    state: (): DataState => {
        return {
            cols: [],
            rows: []
        }
    },
    mutations: {
        setColumns(state: DataState, cols: string[]) {
            state.cols = cols;
        },
        setRows(state: DataState, rows: string[][]) {
            state.rows = rows;
        }
    },
    actions: {
        setData(context: ActionContext<DataState, any>, { rows, cols }: { cols: string[], rows: string[][] }) {
            context.commit('setColumns', cols);
            context.commit('setRows', rows);
        }
    }
}
export default dataModule;