import { Vector3 } from "three";

export const PLAYER = {
  DIRECTION: {
    BACKWARD: 1,
    DOWN: -1,
    FORWARD: -1,
    LEFT: -1,
    NONE: 0,
    RIGHT: 1,
    UP: 1,
  },
  HEIGHT: 1.75, // m
  MASS: 75, // kg
  POSITION: new Vector3(0, 2, 2),
  SIZE: 0.5, // radius in m
  VELOCITY: {
    DEFAULT: 1,
    FORWARD: 2,
    LATERAL: 1,
    LONGITUDINAL: 1,
    NORMAL: 0,
    RUN: 3,
  },
} as const;
