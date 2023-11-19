import { Vector3 } from "three";

const POSITION_Y = 5;
const POSITION_Z = -10;

export const BALL = {
  LEFT: {
    COLOR: "hsl(0, 100%, 75%)",
    POSITION: new Vector3(-2 * Math.random(), POSITION_Y, POSITION_Z),
  },
  MIDDLE: {
    COLOR: "hsl(120, 100%, 75%)",
    POSITION: new Vector3(0, POSITION_Y - 0.5, POSITION_Z),
  },
  RIGHT: {
    COLOR: "hsl(240, 100%, 75%)",
    POSITION: new Vector3(2 * Math.random(), POSITION_Y, POSITION_Z),
  },
} as const;
