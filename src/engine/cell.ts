import { cells } from "../state/cell";
import { game } from "../state/game";
import type { Neighbors } from "../types/cells";

function checkNeighbors(index: number) {
  const neighbors: Neighbors = {};
  const statuses = [];

  neighbors.topLeft = index - cells.rowLength - 1;
  neighbors.top = index - cells.rowLength;
  neighbors.topRight = index - cells.rowLength + 1;

  neighbors.bottomLeft = index + cells.rowLength - 1;
  neighbors.bottom = index + cells.rowLength;
  neighbors.bottomRight = index + cells.rowLength + 1;

  neighbors.left = index - 1;
  neighbors.right = index + 1;

  // "<"" porque no index 99 rowLength vai ser 100
  const isFirstRow = index < cells.rowLength;

  // se for uma grid 10x10 > 9 x 10 = 90 se for igual ou maior a 90 está na última linha
  const isLastRow = index >= (cells.columnLength - 1) * cells.rowLength;

  const isFirstColumn = index === 0 || index % cells.rowLength === 0;

  const isLastColumn = (index + 1) % cells.rowLength === 0;

  if (isFirstRow) {
    neighbors.topLeft = -1;
    neighbors.top = -1;
    neighbors.topRight = -1;
  }

  if (isFirstColumn) {
    neighbors.topLeft = -1;
    neighbors.left = -1;
    neighbors.bottomLeft = -1;
  }

  if (isLastRow) {
    neighbors.bottomLeft = -1;
    neighbors.bottom = -1;
    neighbors.bottomRight = -1;
  }

  if (isLastColumn) {
    neighbors.topRight = -1;
    neighbors.right = -1;
    neighbors.bottomRight = -1;
  }

  for (const neighbor of Object.values(neighbors)) {
    let status;

    if (!neighbor || neighbor < 0) {
      status = "dead";
    } else {
      const cell = cells.current[neighbor];

      if (!cell) {
        status = "dead";
      } else {
        status = cell.isAlive ? "alive" : "dead";
      }

      statuses.push(status);
    }
  }

  return statuses;
}

function getNextState(statuses: string[], isAlive: boolean) {
  const alive = statuses.filter((status) => status === "alive");

  if (!isAlive) return alive.length === 3;

  if (alive.length < 2 || alive.length > 3) return false;

  return true;
}

export function createNextGen() {
  if (game.status !== "running") return;
  cells.next = [];

  for (let i = 0; cells.current.length > i; i++) {
    const statuses = checkNeighbors(i);

    const currentCell = cells.current[i];

    const updatedCell = { ...currentCell };

    const isAlive = getNextState(statuses, updatedCell.isAlive);

    const hasChanged = updatedCell.isAlive !== isAlive;

    if (hasChanged) {
      updatedCell.graphic.context = isAlive
        ? updatedCell.aliveContext
        : updatedCell.deadContext;

      updatedCell.isAlive = isAlive;
    }

    cells.next.push(updatedCell);
  }

  cells.current = cells.next;

  setTimeout(() => createNextGen(), 500);
}
