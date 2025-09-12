import { createNextGen } from "../engine/cell";
import { game } from "../state/game";

export function start() {
  game.status = "running";

  console.log("started");

  createNextGen();
}
