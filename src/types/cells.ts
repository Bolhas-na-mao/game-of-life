import type { Graphics, GraphicsContext } from "pixi.js";

export type Cell = {
  graphic: Graphics;
  aliveContext: GraphicsContext;
  deadContext: GraphicsContext;
  isAlive: boolean;
};

export type Neighbors = {
  topLeft?: number | null;
  topRight?: number | null;
  top?: number | null;
  left?: number | null;
  right?: number | null;
  bottomLeft?: number | null;
  bottom?: number | null;
  bottomRight?: number | null;
};
