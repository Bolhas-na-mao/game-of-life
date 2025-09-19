import { setupButton } from "../renderer/button";
import { renderGrid } from "../renderer/cell";
import { setupDialog } from "../renderer/dialog";

function resize() {
  setupButton();
  setupDialog();
  renderGrid(14);
}

export function handleResize() {
  window.addEventListener("resize", resize);
}
