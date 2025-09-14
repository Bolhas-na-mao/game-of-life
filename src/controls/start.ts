import { sound } from "@pixi/sound";
import { createNextGen } from "../engine/cell";
import { updateButton } from "../renderer/button";
import { game } from "../state/game";
import { renderGrid, resetGrid } from "../renderer/cell";
import { sounds } from "../utils/sounds";

function start() {
  if (game.status === "running") return;

  sound.play(sounds.alias.click);
  game.status = "running";
  createNextGen();

  updateButton(game.status);
}

function pause() {
  game.status = "paused";

  sound.play(sounds.alias.click);

  updateButton(game.status);
}

function restart() {
  game.status = "idle";

  sound.play(sounds.alias.click);

  resetGrid();

  renderGrid(14);

  updateButton(game.status);
}

export const controls = { start, pause, restart };
