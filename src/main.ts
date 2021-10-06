import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { importCSVFromURL } from "./tools";

importCSVFromURL('https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv').then().catch();
createApp(App).use(store).mount("#app");
