import { createApp } from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import store from "@/store";
import { importCSVFromURL } from "@/tools";


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
}

importExample();

createApp(App).use(store).mount("#app");
