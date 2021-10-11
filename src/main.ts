import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import "@/registerServiceWorker";

import { importCSVFromURL } from "@/tools";
import { addDefaultSettings } from "@/graph";
import graphTypes from "@/graph/list";

function importExample(): void {
  importCSVFromURL("https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv").then().catch();
  const graph = store.state.graph;
  graph.title = "Babies Graph";
  graph.type = "dot-plot"
  graph.xAxis = 1;
  graph.yAxis = -1;
  graph.zAxis = -1;
  graph.size = 2;
  graph.scaleFactor = 1;
  addDefaultSettings(graphTypes["dot-plot"].settings)
}

importExample();

createApp(App)
  .use(store)
  .mount("#app");
