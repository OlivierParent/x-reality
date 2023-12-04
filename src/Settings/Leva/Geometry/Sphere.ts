import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";

export namespace SettingsLevaGeometrySphere {
  export const heightSegments = (value: number = 16) => ({
    label: "Height Segments",
    hint: "Number of vertical segments. Default is `16`, minimum is `2`.",
    max: 32,
    min: 2,
    step: 1,
    value,
  });

  export const radius = CircleGeometry.radius;

  export const widthSegments = (value: number = 32) => ({
    label: "Width Segments",
    hint: "Number of horizontal segments. Default is `32`, minimum is `3`.",
    max: 64,
    min: 3,
    step: 1,
    value,
  });

  export const ΘLength = (value: number = 180.0) => ({
    label: "Θ Length (degrees)",
    hint: "Specify vertical sweep angle (theta) size in degrees (converted to radians). Default is `180.0`.",
    max: 180.0,
    min: -180.0,
    step: 0.1,
    value,
  });

  export const ΘStart = CircleGeometry.ΘStart;

  export const ΦLength = (value: number = 360.0) => ({
    label: "Φ Length (degrees)",
    hint: "Specify horizontal sweep angle (phi) size in degrees (converted to radians). Default is `360.0`.",
    max: 360.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const ΦStart = (value: number = 0.0) => ({
    label: "Φ Start (degrees)",
    hint: "Specify horizontal starting angle (phi) in degrees (converted to radians). Default is `0.0`.",
    max: 360.0,
    min: -360.0,
    step: 0.1,
    value,
  });
}
