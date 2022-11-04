export namespace SettingsLevaGeometryPlane {
  export const height = (value: number = 1.0) => ({
    label: "Height",
    hint: "Height along the Y axis. Default is 1.",
    max: 6.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const heightSegments = (value: number = 1) => ({
    label: "Height Segments",
    hint: "Optional. Default is 1.",
    max: 16,
    min: 1,
    step: 1,
    value,
  });

  export const width = (value: number = 1.0) => ({
    label: "Width",
    hint: "Width along the X axis. Default is 1.",
    max: 6.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const widthSegments = (value: number = 1) => ({
    label: "Width Segments",
    hint: "Optional. Default is 1.",
    max: 16,
    min: 1,
    step: 1,
    value,
  });
}
