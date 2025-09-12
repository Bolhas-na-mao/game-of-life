import { createNextGen } from "../engine/cell";
import { game } from "../state/game";

function start() {
  if (game.status === "running") return;

  game.status = "running";

  createNextGen();
}

function pause() {
  game.status = "paused";
}

export const controls = { start, pause };
