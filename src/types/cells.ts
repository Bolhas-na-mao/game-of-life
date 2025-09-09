import type { Graphics, GraphicsContext } from "pixi.js";

export type Cell = {
  graphic: Graphics;
  aliveContext: GraphicsContext;
  deadContext: GraphicsContext;
  isAlive: boolean;
};
