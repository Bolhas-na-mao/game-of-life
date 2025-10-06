import { Assets, Container, Sprite } from "pixi.js";
import { app } from "../app";
import { gsap } from "gsap";

let dialogContainer: Container;
let dialogSprite: Sprite;
let closeButtonSprite: Sprite;

export async function setupDialog() {
  if (dialogContainer && dialogContainer.parent) {
    dialogContainer.parent.removeChild(dialogContainer);
    dialogContainer.destroy({ children: true });
  }

  const centerX = app.screen.width / 2;
  const centerY = app.screen.height / 2;

  dialogContainer = new Container();
  dialogContainer.zIndex = -1;

  const [dialog, closeButton] = await Promise.all([
    Assets.load("assets/info_dialog.png"),
    Assets.load("assets/close_button.png"),
  ]);

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

  closeButtonSprite = new Sprite(closeButton);
  closeButtonSprite.eventMode = "static";

  closeButtonSprite.cursor = "pointer";

  closeButtonSprite.anchor.set(1.5, -0.5);

  const dialogBounds = dialogSprite.getBounds();
  closeButtonSprite.position.set(
    dialogBounds.x + dialogBounds.width,
    dialogBounds.y,
  );
  closeButtonSprite.alpha = 0;

  closeButtonSprite.scale.set(0.05);
  closeButtonSprite.on("pointertap", hideDialog);

  dialogContainer.addChild(closeButtonSprite);

  app.stage.addChild(dialogContainer);
}

export function showDialog() {
  if (dialogContainer && dialogSprite && closeButtonSprite) {
    dialogContainer.zIndex = 2;
    dialogContainer.eventMode = "static";

    gsap.to([dialogSprite, closeButtonSprite], {
      alpha: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }
}

export function hideDialog() {
  if (dialogContainer && dialogSprite && closeButtonSprite) {
    gsap.to([dialogSprite, closeButtonSprite], {
      alpha: 0,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        dialogContainer.zIndex = 0;
        dialogContainer.eventMode = "none";
      },
    });
  }
}
