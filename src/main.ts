import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './icons'

createApp(App)
    .component('icon', FontAwesomeIcon)
    .use(store)
    .mount("#app");
