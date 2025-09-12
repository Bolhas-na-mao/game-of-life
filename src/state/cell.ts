import type { Cell } from "../types/cells";

const current: Cell[] = [];

const next: Cell[] = [];

let rowLength = 0;

export const cells = { current, next, rowLength };
