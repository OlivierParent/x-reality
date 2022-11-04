import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";

export namespace SettingsLevaGeometryRing {
  export const innerRadius = (value: number = 0.5) => ({
    label: "Inner Radius",
    hint: "Default is 0.5.",
    max: 3.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const outerRadius = (value: number = 1.0) => ({
    label: "Outer Radius",
    hint: "Default is 1.",
    max: 3.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const ΘSegments = (value: number = 8) => ({
    label: "Θ Segments",
    hint: "Number of segments. A higher number means the ring will be more round. Minimum is 3. Default is 8.",
    max: 64,
    min: 3,
    step: 1,
    value,
  });

  export const ΘLength = CircleGeometry.ΘLength;

  export const ΘStart = CircleGeometry.ΘStart;

  export const ΦSegments = (value: number = 8) => ({
    label: "Φ Segments",
    hints: "Minimum is 1. Default is 1.",
    max: 64,
    min: 1,
    step: 1,
    value,
  });
}
