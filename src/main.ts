import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";

axios.defaults.baseURL = "https://fakerestapi.azurewebsites.net/api/v1";

createApp(App).use(router).mount("#app");
