import { BALL } from "Examples/Rapier/PinballMachine/Ball.config";

const LENGTH = BALL.RADIUS * 30;

export const PLUNGER_ASSEMBLY = {
  PLUNGER: {
    RADIUS: BALL.RADIUS / 2,
    LENGTH,
  },
  RAIL: {
    LENGTH: (LENGTH * 2) / 3,
    DIAMETER: BALL.RADIUS * 2,
  },
} as const;
