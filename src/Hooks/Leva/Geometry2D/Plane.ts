import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryPlane as Geometry } from "Settings/Leva/Geometry/Plane";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    height, //
    heightSegments,
    width,
    widthSegments,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Plane: folder({
            "X Axis": folder({
              width: Geometry.width(),
              widthSegments: Geometry.widthSegments(),
            }),
            "Y Axis": folder({
              height: Geometry.height(),
              heightSegments: Geometry.heightSegments(),
            }),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    height,
    heightSegments,
    width,
    widthSegments,
  };
}

export { useLeva };
