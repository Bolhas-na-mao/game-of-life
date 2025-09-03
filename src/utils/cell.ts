import { Application, Graphics, GraphicsContext } from "pixi.js";

const cells: GraphicsContext[] = [];

function toggleCell(index: number) {
  const cell = cells[index];

  cell.fill(0xffffff);
}

function renderCell(
  app: Application,
  squareArea: number,
  verticalShift: number,
  index: number
) {
  const horizontalShift = index * squareArea;

  const context = new GraphicsContext()
    .rect(horizontalShift, verticalShift, squareArea, squareArea)
    .stroke({ width: 1, color: 0x3b3a3a });

  const cell = new Graphics(context);

  cells.push(context);
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
