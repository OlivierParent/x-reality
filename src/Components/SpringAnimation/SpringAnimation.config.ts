const RADIUS = 1.5;
const RADIUS_OFFSET = 0.4;

export const SPRING = {
  NORMALISED: {
    MAXIMUM: 350 / 360,
    MINIMUM: 10 / 360,
  },
  OPACITY: {
    MAXIMUM: 1,
    MINIMUM: 0.5,
  },
  RING: {
    PHI: { SEGMENTS: 1 },
    RADIUS: {
      INNER: RADIUS - RADIUS_OFFSET,
      OUTER: RADIUS + RADIUS_OFFSET,
    },
    THETA: {
      LENGTH: Math.PI * 2,
      SEGMENTS: 60,
      START: Math.PI / 2,
    },
  },
  SETTINGS: {
    DAMPING: 15,
    MASS: 1,
    STIFFNESS: 100,
  },
  TORUS: {
    ARC: Math.PI * 2,
    RADIUS,
    SEGMENTS: {
      RADIAL: 30,
      TUBULAR: 60,
    },
    TUBE: RADIUS_OFFSET + 0.1,
  },
} as const;
