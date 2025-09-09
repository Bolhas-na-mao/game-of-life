import { Application } from "pixi.js";
import { renderGrid } from "./renderer/cell";
import colors from "./ui/colors";
import { renderStartButton } from "./renderer/startButton";

(async () => {
  const app = new Application();

  await app.init({ background: colors.background, resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  renderGrid(app, 25);
  renderStartButton(app);
})();
