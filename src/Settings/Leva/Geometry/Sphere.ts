import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";

export namespace SettingsLevaGeometrySphere {
  export const heightSegments = (value: number = 16) => ({
    label: "Height Segments",
    hint: "Number of vertical segments. Minimum = 2, default = 16.",
    max: 32,
    min: 2,
    step: 1,
    value,
  });

  export const radius = CircleGeometry.radius;

  export const widthSegments = (value: number = 32) => ({
    label: "Width Segments",
    hint: "Number of horizontal segments. Minimum = 3, default = 32.",
    max: 64,
    min: 3,
    step: 1,
    value,
  });

  export const ΘLength = (value: number = 180.0) => ({
    label: "Θ Length",
    hint: "Specify vertical sweep angle size. Default = Math.PI.",
    max: 180.0,
    min: -180.0,
    step: 0.1,
    value,
  });

  export const ΘStart = CircleGeometry.ΘStart;

  export const ΦLength = (value: number = 360.0) => ({
    label: "Φ Length",
    hint: "Specify horizontal sweep angle size. Default = 2*Math.PI.",
    max: 360.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const ΦStart = (value: number = 0.0) => ({
    label: "Φ Start",
    hint: "Specify horizontal starting angle. Default = 0.",
    max: 360.0,
    min: -360.0,
    step: 0.1,
    value,
  });
}
