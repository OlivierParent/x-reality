const MARK_VALUE = 10;

export const GAUGE = {
  ANGLE: {
    OFFSET: 90,
    RANGE: 270,
  },
  LEGEND: "kph",
  MARK: {
    CAUTION: "orange",
    DANGER: "red",
    SAFE: "white",
    SUBDIVISION: 10,
  },
  VALUE: {
    CAUTION: MARK_VALUE * 5,
    DANGER: MARK_VALUE * 12,
    MARK_VALUE,
    MAXIMUM: MARK_VALUE * 18,
    MINIMUM: MARK_VALUE * 0,
    SAFE: MARK_VALUE * 3,
  },
} as const;
