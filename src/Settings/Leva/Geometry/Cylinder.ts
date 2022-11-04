import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";
import { SettingsLevaGeometryCone as ConeGeometry } from "Settings/Leva/Geometry/Cone";
import { SettingsLevaGeometryPlane as PlaneGeometry } from "Settings/Leva/Geometry/Plane";

export namespace SettingsLevaGeometryCylinder {
  export const height = PlaneGeometry.height;

  export const heightSegments = PlaneGeometry.heightSegments;

  export const openEnded = ConeGeometry.openEnded;

  export const radialSegments = ConeGeometry.radialSegments;

  export const radiusBottom = (value: number = 1.0) => ({
    label: "Radius Bottom",
    hint: "Radius of the cylinder at the top. Default is 1.",
    max: 3.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const radiusTop = (value: number = 1.0) => ({
    label: "Radius Top",
    hint: "Radius of the cylinder at the bottom. Default is 1.",
    max: 3.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const ΘLength = CircleGeometry.ΘLength;

  export const ΘStart = CircleGeometry.ΘStart;
}
