import { Application, Graphics } from "pixi.js";

function renderCell(
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

  renderCell(app, squareArea, amountOfRect - 1, verticalShift);
}

function renderRow(app: Application, squareArea: number, amountOfRows: number) {
  if (amountOfRows <= 0) return;

  const amountOfRectRatio = app.screen.width / squareArea;
  const amountOfRect = Math.ceil(amountOfRectRatio);

  const verticalShift = (amountOfRows - 1) * squareArea;

  renderCell(app, squareArea, amountOfRect, verticalShift);

  renderRow(app, squareArea, amountOfRows - 1);
}

export function renderGrid(app: Application, squareArea: number) {
  const amountOfRows = app.screen.height / squareArea;

  renderRow(app, squareArea, amountOfRows);
}
