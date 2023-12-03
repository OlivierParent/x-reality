import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryCone as Geometry } from "Settings/Leva/Geometry/Cone";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    height,
    heightSegments,
    openEnded,
    radialSegments,
    radius,
    θLength,
    θStart,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Cone: folder({
            "XZ Plane": folder({
              radius: Geometry.radius(),
              radialSegments: Geometry.radialSegments(),
              openEnded: Geometry.openEnded(),
              Θ: folder({
                θStart: Geometry.ΘStart(),
                θLength: Geometry.ΘLength(),
              }),
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
    openEnded,
    radialSegments,
    radius,
    θLength,
    θStart,
  };
}

export { useLeva };
