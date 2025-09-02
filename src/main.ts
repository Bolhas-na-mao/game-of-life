import { Application, Graphics } from "pixi.js";

(async () => {
  const app = new Application();

  await app.init({ background: "#0A0A0A", resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  const graphics = new Graphics();
  graphics.rect(10, 10, 50, 50).stroke({ width: 2, color: 0xffffff });

  app.stage.addChild(graphics);

  graphics.position.set(0, 0);

  app.stage.addChild(graphics);
})();
