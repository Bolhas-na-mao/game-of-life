import { Assets, Container, Sprite, type Application } from "pixi.js";
import { button } from "../utils/button";
import { controls } from "../controls/start";

export async function renderStartButton(app: Application) {
  const texture = await Assets.load("assets/start_button.png");

  const sprite = new Sprite(texture);

  const buttonContainer = new Container();

  buttonContainer.zIndex = 1;

  app.stage.addChild(buttonContainer);

  sprite.position.set(app.screen.width / 2, app.screen.height / 1.15);

  button.addProperties(sprite);

  sprite.once("pointertap", controls.start);

  buttonContainer.addChild(sprite);
}
