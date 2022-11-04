import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";
import { SettingsLevaGeometryCone as ConeGeometry } from "Settings/Leva/Geometry/Cone";
import { SettingsLevaGeometryTorus as TorusGeometry } from "Settings/Leva/Geometry/Torus";

export namespace SettingsLevaGeometryTorusKnot {
  export const p = (value: number = 2) => ({
    label: "P",
    hint: "This value determines, how many times the geometry winds around its axis of rotational symmetry. Default = 2.",
    max: 32,
    min: 1,
    step: 1,
    value,
  });

  export const q = (value: number = 3) => ({
    label: "Q",
    hint: "This value determines, how many times the geometry winds around a circle in the interior of the torus. Default = 3.",
    max: 32,
    min: 1,
    step: 1,
    value,
  });

  export const radialSegments = ConeGeometry.radialSegments;

  export const radius = CircleGeometry.radius;

  export const tube = TorusGeometry.tube;

  export const tubularSegments = TorusGeometry.tubularSegments;
}
