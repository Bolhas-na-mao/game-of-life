import { sound } from "@pixi/sound";

const alias = Object.freeze({
  hover: "hover_sound",
  click: "click_sound",
  background: "background_sound",
});

let registered = false;

function add() {
  if (registered) return;
  sound.add(alias.hover, "assets/sounds/hover.mp3");
  sound.add(alias.click, "assets/sounds/click.mp3");
  sound.add(alias.background, "assets/sounds/background.mp3");
  registered = true;
}

export const sounds = { add, alias };
