import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import routes from "./routes/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(routes);
app.mount("#app");
