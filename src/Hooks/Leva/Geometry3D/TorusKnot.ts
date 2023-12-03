import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryTorusKnot as Geometry } from "Settings/Leva/Geometry/TorusKnot";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    p, //
    q,
    radialSegments,
    radius,
    tube,
    tubularSegments,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder({
        "Torus Knot": folder({
          p: Geometry.p(),
          q: Geometry.q(),
          radialSegments: Geometry.radialSegments(),
          radius: Geometry.radius(),
          tube: Geometry.tube(),
          tubularSegments: Geometry.tubularSegments(),
        }),
      }),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );
  return {
    p,
    q,
    radialSegments,
    radius,
    tube,
    tubularSegments,
  };
}

export { useLeva };
