import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";
import { SettingsLevaGeometryCone as ConeGeometry } from "Settings/Leva/Geometry/Cone";

export namespace SettingsLevaGeometryTorus {
  export const arc = (value: number = 360.0) => ({
    label: "Arc",
    max: 360.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const radialSegments = ConeGeometry.radialSegments;

  export const radius = CircleGeometry.radius;

  export const tube = (value: number = 0.4) => ({
    label: "Tube",
    hint: "Radius of the tube. Default = 0.4.",
    max: 3.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const tubularSegments = (value: number = 6) => ({
    label: "Tubular Segments",
    hint: "Default = 6.",
    max: 64,
    min: 3,
    step: 1,
    value,
  });
}
