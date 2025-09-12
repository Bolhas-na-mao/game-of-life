import { cells } from "../state/cell";
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

  for (let neighbor of Object.values(neighbors)) {
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

  if (!isAlive) return alive.length === 3 ? true : false;

  if (alive.length < 2 || alive.length > 3) return false;

  return true;
}

export function createNextGen() {
  for (let i = 0; cells.current.length > i; i++) {
    const statuses = checkNeighbors(i);

    const currentCell = cells.current[i];

    const isAlive = getNextState(statuses, currentCell.isAlive);

    currentCell.graphic.context = isAlive
      ? currentCell.aliveContext
      : currentCell.deadContext;

    cells.next.push(currentCell);
  }

  cells.current = cells.next;

  setTimeout(() => createNextGen(), 2000);
}
