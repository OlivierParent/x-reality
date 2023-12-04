import { SettingsLevaGeometryBox as BoxGeometry } from "Settings/Leva/Geometry/Box";
import { SettingsLevaGeometryPlane as PlaneGeometry } from "Settings/Leva/Geometry/Plane";

export namespace SettingsLevaGeometryRoundedBox {
  export const bevelSegments = (value: number = 4) => ({
    label: "Bevel Segments",
    hint: "Number of bevel segments. Default is `4`, setting it to `0` removes the bevel, as a result the texture is applied to the whole geometry.",
    max: 16,
    min: 0,
    step: 1,
    value,
  });

  export const creaseAngle = (value: number = 0.4) => ({
    label: "Crease Angle",
    hint: "Number of bevel segments. Default is `0.4`, setting it to `0` removes the bevel, as a result the texture is applied to the whole geometry",
    max: 3.0,
    min: 0.01,
    step: 0.01,
    value,
  });

  export const depth = BoxGeometry.depth;

  export const height = PlaneGeometry.height;

  export const radius = (value: number = 0.05) => ({
    label: "Radius",
    hint: "Radius of the rounded corners. Default is `0.05`.",
    max: 3.0,
    min: 0.01,
    step: 0.01,
    value,
  });

  export const smoothness = (value: number = 4) => ({
    label: "Smoothness",
    hint: "Number of curve segments. Default is `4`.",
    max: 16,
    min: 1,
    step: 1,
    value,
  });

  export const width = PlaneGeometry.width;
}
