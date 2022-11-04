export namespace SettingsLevaGeometryCircle {
  export const radius = (value: number = 1.0) => ({
    label: "Radius",
    hint: "Radius of the circle, default = 1.",
    max: 3.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const segments = (value: number = 8) => ({
    label: "Segments",
    hint: "Number of segments (triangles), minimum = 3, default = 8.",
    max: 64,
    min: 3,
    step: 1,
    value,
  });

  export const ΘLength = (value: number = 360.0) => ({
    label: "Θ Length",
    hint: "The central angle, often called theta, of the circular sector. The default = 2*Math.PI, which makes for a complete circle.",
    max: 360.0,
    min: -360.0,
    step: 0.1,
    value,
  });

  export const ΘStart = (value: number = 0.0) => ({
    label: "Θ Start",
    hint: "Start angle for first segment, default = 0 (three o'clock position).",
    max: 360.0,
    min: -360.0,
    step: 0.1,
    value,
  });
}
