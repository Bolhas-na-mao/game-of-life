import { setupButton } from "../renderer/button";
import { renderGrid } from "../renderer/cell";
import { setupDialog } from "../renderer/dialog";
import { constants } from "./constants";

function resize() {
  setupButton();
  setupDialog();
  renderGrid(constants.cellSize);
}

export function handleResize() {
  window.addEventListener("resize", resize);
}
