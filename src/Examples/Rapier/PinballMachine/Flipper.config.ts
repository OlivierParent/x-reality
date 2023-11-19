import { Vector3 } from "three";

import { OrientationValue } from "Types/OrientationValue";

export const FLIPPER = {
  LEFT: {
    COLOR: "hsl(0, 100%, 75%)",
    ORIENTATION: "left" as OrientationValue,
    POSITION: new Vector3(-1, 0, 0),
  },
  RIGHT: {
    COLOR: "hsl(240, 100%, 75%)",
    ORIENTATION: "right" as OrientationValue,
    POSITION: new Vector3(1, 0, 0),
  },
} as const;
