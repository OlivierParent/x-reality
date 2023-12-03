import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryTorus as Geometry } from "Settings/Leva/Geometry/Torus";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    arc, //
    radialSegments,
    radius,
    tube,
    tubularSegments,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Torus: folder({
            arc: Geometry.arc(),
            radialSegments: Geometry.radialSegments(),
            radius: Geometry.radius(),
            tube: Geometry.tube(),
            tubularSegments: Geometry.tubularSegments(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    arc,
    radialSegments,
    radius,
    tube,
    tubularSegments,
  };
}

export { useLeva };
