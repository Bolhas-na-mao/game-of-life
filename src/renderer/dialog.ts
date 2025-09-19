import { Assets, Container, Sprite } from "pixi.js";
import { app } from "../app";
import { gsap } from "gsap";

let dialogContainer: Container;
let dialogSprite: Sprite;

export async function setupDialog() {
  const centerX = app.screen.width / 2;
  const centerY = app.screen.height / 2;

  dialogContainer = new Container();
  dialogContainer.zIndex = 0;
  const dialog = await Assets.load("assets/info_dialog.png");

  dialogSprite = new Sprite(dialog);

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

export function showDialog() {
  if (dialogContainer && dialogSprite) {
    dialogContainer.zIndex = 2;

    gsap.to(dialogSprite, {
      alpha: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }
}

export function hideDialog() {
  if (dialogContainer && dialogSprite) {
    gsap.to(dialogSprite, {
      alpha: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        dialogContainer.zIndex = 0;
      },
    });
  }
}
