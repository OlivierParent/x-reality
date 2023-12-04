export namespace SettingsLevaGeometryCircle {
  export const radius = (value: number = 1.0) => ({
    label: "Radius",
    hint: "Radius of the circle. Default is `1.0`.",
    max: 3.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const segments = (value: number = 8) => ({
    label: "Segments",
    hint: "Number of segments (triangles). Default is `8`, minimum is `3`.",
    max: 64,
    min: 3,
    step: 1,
    value,
  });

  export const ΘLength = (value: number = 360.0) => ({
    label: "Θ Length (degrees)",
    hint: "The central angle (theta) of the circular sector in degrees (converted to radians). Default is `360.0` (full circle).",
    max: 360.0,
    min: -360.0,
    step: 0.1,
    value,
  });

  export const ΘStart = (value: number = 0.0) => ({
    label: "Θ Start (degrees)",
    hint: "Start angle (theta) for first segment in degrees (converted to radians). Default is `0.0` (three o'clock position).",
    max: 360.0,
    min: -360.0,
    step: 0.1,
    value,
  });
}
