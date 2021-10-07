import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { importCSVFromURL } from "./tools";


function importExample(): void {
  importCSVFromURL('https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv').then().catch();
  store.state.graph = {
    title: 'Babies Graph',
    type: 'dot-plot',
    xAxis: 1,
    yAxis: -1,
    zAxis: -1,
    size: 2,
    scaleFactor: 1
  }

}

importExample();

createApp(App).use(store).mount("#app");
