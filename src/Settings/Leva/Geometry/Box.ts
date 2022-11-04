import { SettingsLevaGeometryPlane as PlaneGeometry } from "Settings/Leva/Geometry/Plane";

export namespace SettingsLevaGeometryBox {
  export const depth = (value: number = 1.0) => ({
    label: "Depth",
    hint: "Depth along the Z axis. Default is 1.",
    max: 6.0,
    min: 0.1,
    step: 0.1,
    value,
  });

  export const depthSegments = (value: number = 1) => ({
    label: "Depth Segments",
    hint: "Optional. Default is 1.",
    max: 16,
    min: 1,
    step: 1,
    value,
  });

  export const height = PlaneGeometry.height;

  export const heightSegments = PlaneGeometry.heightSegments;

  export const width = PlaneGeometry.width;

  export const widthSegments = PlaneGeometry.widthSegments;
}
