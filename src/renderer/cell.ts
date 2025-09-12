import { Application, Graphics, Rectangle, GraphicsContext } from "pixi.js";
import colors from "../ui/colors";
import { cells } from "../state/cell";
import { game } from "../state/game";
import { eventHandler } from "../utils/events";

function toggleCell(index: number, forceState?: boolean) {
  if (game.status === "running") return;

  const cell = cells.current[index];

  if (!cell) return;

  const newState = forceState !== undefined ? forceState : !cell.isAlive;

  if (cell.isAlive !== newState) {
    cell.isAlive = newState;
    cell.graphic.context = cell.isAlive ? cell.aliveContext : cell.deadContext;
  }
}


function renderCell(
  app: Application,
  squareArea: number,
  verticalShift: number,
  index: number
) {
  const horizontalShift = index * squareArea;

  const base = new GraphicsContext().rect(
    horizontalShift,
    verticalShift,
    squareArea,
    squareArea
  );

  const deadContext = base
    .clone()
    .stroke({ width: 1, color: colors.foreground });

  const aliveContext = base.clone().fill(colors.alive);

  const cell = new Graphics(deadContext);

  cell.eventMode = "static";

  cell.hitArea = new Rectangle(
    horizontalShift,
    verticalShift,
    squareArea,
    squareArea
  );

  cells.current.push({
    graphic: cell,
    isAlive: false,
    aliveContext,
    deadContext,
  });

  const cellIndex = cells.current.length - 1;

  cell.on("pointerdown", () => eventHandler.pointerDown(cellIndex));
  cell.on("pointerover", () => eventHandler.pointerOver(cellIndex));
  cell.on("pointerup", () => eventHandler.pointerUp(cellIndex));

  app.stage.addChild(cell);
}

function renderRow(app: Application, squareArea: number, index: number) {
  const amountOfCells = Math.ceil(app.screen.width / squareArea);

  cells.rowLength = amountOfCells;

  const verticalShift = index * squareArea;

  for (let i = 0; amountOfCells > i; i++) {
    renderCell(app, squareArea, verticalShift, i);
  }
}

function renderGrid(app: Application, squareArea: number) {
  const amountOfRows = Math.ceil(app.screen.height / squareArea);

  cells.columnLength = amountOfRows;

  app.stage.eventMode = "static";
  app.stage.on("pointerup", eventHandler.globalPointerUp);
  app.stage.on("pointerupoutside", eventHandler.globalPointerUp);

  for (let i = 0; amountOfRows > i; i++) {
    renderRow(app, squareArea, i);
  }
}

export { renderGrid, toggleCell };
