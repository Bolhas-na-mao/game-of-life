import { Assets, Container, Sprite, type Texture } from "pixi.js";
import { button } from "../utils/button";
import { controls } from "../controls/controls";
import type { Status } from "../types/game";
import { app } from "../app";

let buttonContainer: Container;
let mainButtonSprite: Sprite;
let infoButtonSprite: Sprite;
let controlsButtonSprite: Sprite;
let restartButtonSprite: Sprite;

let startTexture: Texture;
let pauseTexture: Texture;
let controlsTexture: Texture;
let infoTexture: Texture;
let restartTexture: Texture;

const BUTTON_SPACING = 160;
const BUTTON_Y_POSITION_RATIO = 1.15;

export async function setupButton() {
  await loadTextures();

  createButtonContainer();

  createButtons();

  app.stage.addChild(buttonContainer);

  updateButton("idle");
}

async function loadTextures() {
  const [start, pause, controlsTex, info, restart] = await Promise.all([
    Assets.load("assets/start_button.png"),
    Assets.load("assets/pause_button.png"),
    Assets.load("assets/controls_button.png"),
    Assets.load("assets/info_button.png"),
    Assets.load("assets/restart_button.png"),
  ]);

  startTexture = start;
  pauseTexture = pause;
  controlsTexture = controlsTex;
  infoTexture = info;
  restartTexture = restart;
}

function createButtonContainer() {
  buttonContainer = new Container();
  buttonContainer.zIndex = 1;
}

function createButtons() {
  const centerX = app.screen.width / 2;
  const buttonY = app.screen.height / BUTTON_Y_POSITION_RATIO;

  mainButtonSprite = new Sprite(startTexture);
  mainButtonSprite.position.set(centerX, buttonY);
  button.addProperties(mainButtonSprite);
  buttonContainer.addChild(mainButtonSprite);

  infoButtonSprite = new Sprite(infoTexture);
  infoButtonSprite.position.set(centerX - BUTTON_SPACING, buttonY);
  button.addProperties(infoButtonSprite);
  buttonContainer.addChild(infoButtonSprite);

  controlsButtonSprite = new Sprite(controlsTexture);
  controlsButtonSprite.position.set(centerX + BUTTON_SPACING, buttonY);
  button.addProperties(controlsButtonSprite);
  buttonContainer.addChild(controlsButtonSprite);

  restartButtonSprite = new Sprite(restartTexture);
  restartButtonSprite.position.set(centerX + BUTTON_SPACING * 1.65, buttonY);
  button.addProperties(restartButtonSprite);
  buttonContainer.addChild(restartButtonSprite);
  restartButtonSprite.on("pointertap", controls.restart);
}

export function getButtons() {
  return {
    main: mainButtonSprite,
    info: infoButtonSprite,
    controls: controlsButtonSprite,
    restart: restartButtonSprite,
    container: buttonContainer,
  };
}

export function updateButton(status: Status) {
  mainButtonSprite.off("pointertap");

  if (status === "running") {
    mainButtonSprite.texture = pauseTexture;
    mainButtonSprite.on("pointertap", controls.pause);
  } else {
    mainButtonSprite.texture = startTexture;
    mainButtonSprite.on("pointertap", controls.start);
  }
}
