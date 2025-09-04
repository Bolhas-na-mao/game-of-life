import { Application } from "pixi.js";
import { renderGrid } from "./utils/cell";
import colors from "./ui/colors";

(async () => {
  const app = new Application();

  await app.init({ background: colors.background, resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  renderGrid(app, 25);
})();
