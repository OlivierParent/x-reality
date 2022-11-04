import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";
import { SettingsLevaGeometryPlane as PlaneGeometry } from "Settings/Leva/Geometry/Plane";

export namespace SettingsLevaGeometryCone {
  export const height = PlaneGeometry.height;

  export const heightSegments = PlaneGeometry.heightSegments;

  export const openEnded = (value: boolean = false) => ({
    label: "Open Ended",
    hint: "A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.",
    value,
  });

  export const radialSegments = (value: number = 8) => ({
    label: "Radial Segments",
    hint: "Number of segmented faces around the circumference of the cone. Default is 8.",
    max: 64,
    min: 3,
    step: 1,
    value,
  });

  export const radius = CircleGeometry.radius;

  export const ΘLength = CircleGeometry.ΘLength;

  export const ΘStart = CircleGeometry.ΘStart;
}
