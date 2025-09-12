import { createNextGen } from "../engine/cell";
import { updateButton } from "../renderer/button";
import { game } from "../state/game";

function start() {
  if (game.status === "running") return;

  game.status = "running";
  createNextGen();

  updateButton(game.status);
}

function pause() {
  game.status = "paused";

  updateButton(game.status);
}

export const controls = { start, pause };
