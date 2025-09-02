import { Application, Graphics } from "pixi.js";

function addCell(
  app: Application,
  squareArea: number,
  amountOfRect: number,
  verticalShift: number
) {
  if (amountOfRect <= 0) return;

  const graphics = new Graphics();

  const horizontalShift = (amountOfRect - 1) * squareArea;
  graphics
    .rect(horizontalShift, verticalShift, squareArea, squareArea)
    .stroke({ width: 1, color: 0x3b3a3a });

  app.stage.addChild(graphics);

  graphics.position.set(0, 0);

  app.stage.addChild(graphics);

  addCell(app, squareArea, amountOfRect - 1, verticalShift);
}

function addRow(app: Application, squareArea: number, amountOfRows: number) {
  if (amountOfRows <= 0) return;

  const amountOfRectRatio = app.screen.width / squareArea;
  const amountOfRect = Math.ceil(amountOfRectRatio);

  const verticalShift = (amountOfRows - 1) * squareArea;

  addCell(app, squareArea, amountOfRect, verticalShift);

  addRow(app, squareArea, amountOfRows - 1);
}

export function addCellsGrid(app: Application, squareArea: number) {
  const amountOfRows = app.screen.height / squareArea;

  addRow(app, squareArea, amountOfRows);
}
