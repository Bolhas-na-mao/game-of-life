import { Assets, Container, Sprite, type Application } from "pixi.js";
import scale from "../utils/scale";

export async function renderStartButton(app: Application) {
  const texture = await Assets.load("assets/start_button.png");

  const sprite = new Sprite(texture);

  const buttonContainer = new Container();

  buttonContainer.zIndex = 1;
  app.stage.addChild(buttonContainer);

  sprite.position.set(app.screen.width / 2, app.screen.height / 1.15);

  scale.button(sprite);

  buttonContainer.addChild(sprite);
}
