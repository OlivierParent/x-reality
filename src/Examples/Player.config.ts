import { Vector3 } from "three";

export const PLAYER = Object.freeze({
  MASS: 75, // kg
  POSITION: new Vector3(0, 2, 2),
  SIZE: 0.5, // radius in m
  VELOCITY: {
    FORWARD_DIRECTION: 3,
    RIGHT_DIRECTION: 1,
  },
});
