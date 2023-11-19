const MARK_VALUE = 10;

export const GAUGE = {
  ANGLE: {
    OFFSET: 90,
    RANGE: 270,
  },
  LEGEND: "rpm × 100",
  MARK: {
    CAUTION: "orange",
    DANGER: "red",
    SAFE: "white",
    SUBDIVISION: 10,
  },
  VALUE: {
    CAUTION: MARK_VALUE * 4.5,
    DANGER: MARK_VALUE * 5.5,
    MARK_VALUE,
    MAXIMUM: MARK_VALUE * 7,
    MINIMUM: MARK_VALUE * 0,
    SAFE: MARK_VALUE * 0.8,
  },
} as const;
