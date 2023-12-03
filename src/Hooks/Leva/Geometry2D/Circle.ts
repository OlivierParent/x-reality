import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryCircle as Geometry } from "Settings/Leva/Geometry/Circle";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    radius, //
    segments,
    θLength,
    θStart,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Circle: folder({
            "XY Plane": folder({
              radius: Geometry.radius(),
              segments: Geometry.segments(),
              Θ: folder({
                θStart: Geometry.ΘStart(),
                θLength: Geometry.ΘLength(),
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
    radius,
    segments,
    θLength,
    θStart,
  };
}

export { useLeva };
