import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryRoundedBox as Geometry } from "Settings/Leva/Geometry/RoundedBox";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    bevelSegments,
    creaseAngle,
    depth,
    height,
    radius,
    smoothness,
    width,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          RoundedBox: folder({
            "X Axis": folder({
              width: Geometry.width(),
            }),
            "Y Axis": folder({
              height: Geometry.height(),
            }),
            "Z Axis": folder({
              depth: Geometry.depth(),
            }),
            Other: folder({
              bevelSegments: Geometry.bevelSegments(),
              creaseAngle: Geometry.creaseAngle(),
              radius: Geometry.radius(),
              smoothness: Geometry.smoothness(),
            }),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    bevelSegments,
    creaseAngle,
    depth,
    height,
    radius,
    smoothness,
    width,
  };
}

export { useLeva };
