import { Application, Graphics } from "pixi.js";
function renderCell(
  app: Application,
  squareArea: number,
  verticalShift: number,
  index: number
) {
  const graphics = new Graphics();
  const horizontalShift = index * squareArea;
  graphics
    .rect(horizontalShift, verticalShift, squareArea, squareArea)
    .stroke({ width: 1, color: 0x3b3a3a });
  app.stage.addChild(graphics);
  graphics.position.set(0, 0);
  app.stage.addChild(graphics);
}
function renderRow(app: Application, squareArea: number, index: number) {
  const amountOfCells = Math.ceil(app.screen.width / squareArea);
  const verticalShift = index * squareArea;
  for (let i = 0; amountOfCells > i; i++) {
    renderCell(app, squareArea, verticalShift, i);
  }
}
export function renderGrid(app: Application, squareArea: number) {
  const amountOfRows = app.screen.height / squareArea;
  for (let i = 0; amountOfRows > i; i++) {
    renderRow(app, squareArea, i);
  }
}
