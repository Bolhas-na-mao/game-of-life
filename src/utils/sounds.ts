import { sound } from "@pixi/sound";

const alias = {
  hover: "hover_sound",
  click: "click_sound",
};

function add() {
  sound.add(alias.hover, "assets/sounds/hover.mp3");
  sound.add(alias.click, "assets/sounds/click.mp3");
}

export const sounds = { add, alias };
