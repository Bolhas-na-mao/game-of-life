import { Assets, Container, Sprite, type Texture } from "pixi.js";
import { button } from "../utils/button";
import { controls } from "../controls/start";
import type { Status } from "../types/game";
import { app } from "../app";

let buttonContainer: Container;
let buttonSprite: Sprite;
let startTexture: Texture;
let pauseTexture: Texture;

export async function setupButton() {

  startTexture = await Assets.load("assets/start_button.png");
  pauseTexture = await Assets.load("assets/pause_button.png");

  buttonContainer = new Container();
  buttonContainer.zIndex = 1;

  buttonSprite = new Sprite(startTexture);
  buttonSprite.position.set(app.screen.width / 2, app.screen.height / 1.15);
  button.addProperties(buttonSprite);

  buttonContainer.addChild(buttonSprite);
  app.stage.addChild(buttonContainer);

  updateButton("idle");
}

export function updateButton(status: Status) {

  buttonSprite.off("pointertap");

  if (status === "running") {
    buttonSprite.texture = pauseTexture;
    buttonSprite.on("pointertap", controls.pause);
  } else {
    buttonSprite.texture = startTexture;
    buttonSprite.on("pointertap", controls.start);
  }
}
