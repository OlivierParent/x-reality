import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryBox as Geometry } from "Settings/Leva/Geometry/Box";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    depth, //
    depthSegments,
    height,
    heightSegments,
    width,
    widthSegments,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Box: folder({
            "X Axis": folder({
              width: Geometry.width(),
              widthSegments: Geometry.widthSegments(),
            }),
            "Y Axis": folder({
              height: Geometry.height(),
              heightSegments: Geometry.heightSegments(),
            }),
            "Z Axis": folder({
              depth: Geometry.depth(),
              depthSegments: Geometry.depthSegments(),
            }),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    depth,
    depthSegments,
    height,
    heightSegments,
    width,
    widthSegments,
  };
}

export { useLeva };
