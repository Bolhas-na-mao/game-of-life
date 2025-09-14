import { renderGrid } from "./renderer/cell";
import colors from "./ui/colors";
import { setupButton } from "./renderer/button";
import { app } from "./app";
import { sounds } from "./utils/sounds";
import { sound } from "@pixi/sound";

(async () => {
  await app.init({ background: colors.background, resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  renderGrid(14);

  setupButton();

  sounds.add();

  sound.play(sounds.alias.background);
})();
