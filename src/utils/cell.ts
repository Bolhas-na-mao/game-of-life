import { Application, Graphics, Rectangle, GraphicsContext } from "pixi.js";
import colors from "../ui/colors";

const cells: {
  graphic: Graphics;
  activeContext: GraphicsContext;
  inactiveContext: GraphicsContext;
  isActive: boolean;
}[] = [];

function toggleCell(index: number) {
  const cell = cells[index];

  cell.isActive = !cell.isActive;

  cell.graphic.context = cell.isActive
    ? cell.activeContext
    : cell.inactiveContext;
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

  const inactiveContext = base
    .clone()
    .stroke({ width: 1, color: colors.foreground });

  const activeContext = base.clone().fill(colors.alive);

  const cell = new Graphics(inactiveContext);

  cell.eventMode = "static";

  cell.hitArea = new Rectangle(
    horizontalShift,
    verticalShift,
    squareArea,
    squareArea
  );

  cells.push({
    graphic: cell,
    isActive: false,
    activeContext,
    inactiveContext,
  });

  const cellIndex = cells.length - 1;

  cell.on("pointertap", () => toggleCell(cellIndex));

  app.stage.addChild(cell);
}

function renderRow(app: Application, squareArea: number, index: number) {
  const amountOfCells = Math.ceil(app.screen.width / squareArea);

  const verticalShift = index * squareArea;

  for (let i = 0; amountOfCells > i; i++) {
    renderCell(app, squareArea, verticalShift, i);
  }
}

function renderGrid(app: Application, squareArea: number) {
  const amountOfRows = app.screen.height / squareArea;

  for (let i = 0; amountOfRows > i; i++) {
    renderRow(app, squareArea, i);
  }
}

export { renderGrid, toggleCell };
