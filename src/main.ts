import { renderGrid } from "./renderer/cell";
import colors from "./ui/colors";
import { setupButton } from "./renderer/button";
import { app } from "./app";
import { sounds } from "./utils/sounds";
import { sound } from "@pixi/sound";
import { setupDialog } from "./renderer/dialog";
import { handleResize } from "./utils/resize";
import { constants } from "./utils/constants";

(async () => {
  await app.init({ background: colors.background, resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  renderGrid(constants.cellSize);

  sounds.add();

  setupButton();

  setupDialog();

  handleResize()

  sound.play(sounds.alias.background, { loop: true, singleInstance: true });
})();
