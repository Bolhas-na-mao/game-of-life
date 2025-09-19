import { toggleCell } from "../renderer/cell";
import { hideDialog } from "../renderer/dialog";
import { cells } from "../state/cell";
import { game } from "../state/game";

let isDragging = false;
let dragToggleState: boolean | null = null;
let hasMovedDuringPress = false;

function pointerDown(cellIndex: number) {
  hideDialog();

  if (game.status === "running") return;

  const currentCell = cells.current[cellIndex];
  if (currentCell) {
    dragToggleState = !currentCell.isAlive;
    hasMovedDuringPress = false;
  }
}

function pointerOver(cellIndex: number) {
  if (game.status === "running") return;

  if (dragToggleState !== null && !isDragging) {
    isDragging = true;
  }

  if (isDragging && dragToggleState !== null) {
    hasMovedDuringPress = true;
    toggleCell(cellIndex, dragToggleState);
  }
}

function pointerUp(cellIndex: number) {
  hideDialog();

  if (!hasMovedDuringPress && dragToggleState !== null) {
    toggleCell(cellIndex);
  }

  isDragging = false;
  dragToggleState = null;
  hasMovedDuringPress = false;
}

function globalPointerUp() {
  isDragging = false;
  dragToggleState = null;
  hasMovedDuringPress = false;
}

export const eventHandler = {
  pointerDown,
  pointerOver,
  pointerUp,
  globalPointerUp,
};
