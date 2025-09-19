import { Assets, Container, Sprite } from "pixi.js";
import { app } from "../app";

export async function setupDialog() {
  const centerX = app.screen.width / 2;
  const centerY = app.screen.height / 2;

  let dialogContainer = new Container();
  dialogContainer.zIndex = 0;
  const dialog = await Assets.load("assets/info_dialog.png");

  const dialogSprite = new Sprite(dialog);

  const maxWidth = app.screen.width * 0.9;
  const maxHeight = app.screen.height * 0.9;

  const scaleX = maxWidth / dialogSprite.width;
  const scaleY = maxHeight / dialogSprite.height;
  const scale = Math.min(scaleX, scaleY);

  dialogSprite.scale.set(scale);

  dialogSprite.anchor.set(0.5, 0.5);
  dialogSprite.position.set(centerX, centerY);
  dialogSprite.alpha = 0;
  dialogContainer.addChild(dialogSprite);

  app.stage.addChild(dialogContainer);
}
