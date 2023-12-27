const WIDTH = 10;
const HEIGHT = 16;
const THICKNESS = 0.125;

export const PLAYFIELD = {
  WIDTH,
  HEIGHT,
  THICKNESS,
  COLLIDER: {
    WIDTH: WIDTH / 2,
    HEIGHT: THICKNESS / 2,
    DEPTH: HEIGHT / 2,
  },
} as const;
