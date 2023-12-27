import { GAUGE as GAUGE_LEFT } from "Components/GaugeCluster/GaugeLeft.config";
import { GAUGE as GAUGE_RIGHT } from "Components/GaugeCluster/GaugeRight.config";

function getValue(value: number, maximum: number = GAUGE_LEFT.VALUE.MAXIMUM) {
  return Math.round((value / maximum) * 100);
}

export const GAUGE_CLUSTER = {
  ACCELERATION_RATIO: 0.3,
  GEAR_RATIO: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9],
  POWER_LOSS_RATIO: 0.85,
  RPM: {
    INITIAL: getValue(35, GAUGE_LEFT.VALUE.MAXIMUM),
    SHIFTED: {
      DOWN: getValue(35, GAUGE_LEFT.VALUE.MAXIMUM),
      UP: getValue(45, GAUGE_LEFT.VALUE.MAXIMUM),
    },
    SHIFT: {
      DOWN: getValue(25, GAUGE_LEFT.VALUE.MAXIMUM),
      UP: getValue(55, GAUGE_LEFT.VALUE.MAXIMUM),
    },
  },
  SPEED: {
    IDLE: getValue(18, GAUGE_RIGHT.VALUE.MAXIMUM),
    TOP: getValue(GAUGE_RIGHT.VALUE.DANGER, GAUGE_RIGHT.VALUE.MAXIMUM),
  },
} as const;
