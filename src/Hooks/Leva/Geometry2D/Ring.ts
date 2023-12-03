import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryRing as Geometry } from "Settings/Leva/Geometry/Ring";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    innerRadius, //
    outerRadius,
    θLength,
    θSegments,
    θStart,
    φSegments,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Ring: folder({
            "XY Plane": folder({
              innerRadius: Geometry.innerRadius(),
              outerRadius: Geometry.outerRadius(),
              Θ: folder({
                θSegments: Geometry.ΘSegments(),
                θStart: Geometry.ΘStart(),
                θLength: Geometry.ΘLength(),
              }),
              Φ: folder({
                φSegments: Geometry.ΦSegments(),
              }),
            }),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    innerRadius,
    outerRadius,
    θLength,
    θSegments,
    θStart,
    φSegments,
  };
}

export { useLeva };
