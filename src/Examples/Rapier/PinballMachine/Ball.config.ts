import { Vector3 } from "three";

export const POSITION = {
  X: {
    CENTER: 0.001,
    EXTREMITY: 1,
  },
  Y: 7,
  Z: -10,
} as const;

export const BALL = {
  LEFT: {
    COLOR: "hsl(0, 100%, 75%)",
    POSITION: new Vector3(
      -POSITION.X.EXTREMITY * (Math.random() + 0.5),
      POSITION.Y,
      POSITION.Z
    ),
  },
  MIDDLE: {
    COLOR: "hsl(120, 100%, 75%)",
    POSITION: new Vector3(
      POSITION.X.CENTER * (Math.random() * 2 - 1),
      POSITION.Y,
      POSITION.Z - 0.5
    ),
  },
  RIGHT: {
    COLOR: "hsl(240, 100%, 75%)",
    POSITION: new Vector3(
      POSITION.X.EXTREMITY * (Math.random() + 0.5),
      POSITION.Y,
      POSITION.Z
    ),
  },
} as const;
