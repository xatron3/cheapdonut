import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/main.css";
import KeyHandler from "./handlers/KeyHandler";

KeyHandler.regsiterKeyListner();

// Stores
import store from "./store/store.js";

const app = createApp(App);
app.use(store);
app.mount("#app");
