import "./app.css";
import "@picocss/pico";
import App from "./App.svelte";
import { createEstimationStore } from "./lib/stores/estimations";

const app = new App({
  target: document.getElementById("app"),
  context: new Map([["estimations", createEstimationStore({useLocalStorage: true})]])
});

export default app;
