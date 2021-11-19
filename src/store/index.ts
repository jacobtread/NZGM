import { createStore } from "vuex";
import graph from "@/store/modules/graph";
import data from "@/store/modules/data";


export default createStore({
    modules: { graph, data },
});
