import { renderGrid } from "./renderer/cell";
import colors from "./ui/colors";
import { setupButton } from "./renderer/button";
import { app } from "./app";

(async () => {
  await app.init({ background: colors.background, resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  renderGrid(14);
  setupButton();
})();
