import { Assets, Container, Sprite, type Application } from "pixi.js";

export async function renderStartButton(app: Application) {
  const texture = await Assets.load("assets/start_button.png");

  const sprite = new Sprite(texture);

  const buttonContainer = new Container();

  buttonContainer.zIndex = 1;
  app.stage.addChild(buttonContainer);

  sprite.position.set(app.screen.width / 2 - 100, app.screen.height / 1.2);

  sprite.scale.set(0.4);

  buttonContainer.addChild(sprite);
}
