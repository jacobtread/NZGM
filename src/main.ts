import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './icons'
import { importFromURL } from "@/tools";


importFromURL('https://raw.githubusercontent.com/mathsnz/NZGrapher/master/grapher/datasets/Babies.csv').then().catch()

createApp(App)
    .component('icon', FontAwesomeIcon)
    .use(store)
    .mount("#app");
