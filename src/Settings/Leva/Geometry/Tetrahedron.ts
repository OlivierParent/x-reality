import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";

export namespace SettingsLevaGeometryTetrahedron {
  export const detail = (value: number = 0) => ({
    label: "Detail",
    hint: "Default is 0.",
    max: 8,
    min: 0,
    step: 1,
    value,
  });

  export const radius = CircleGeometry.radius;
}
