import { Application } from "pixi.js";
import { renderGrid } from "./utils/cell";

(async () => {
  const app = new Application();

  await app.init({ background: "#0A0A0A", resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  renderGrid(app, 25);
})();
