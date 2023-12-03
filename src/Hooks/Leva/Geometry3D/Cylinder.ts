import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryCylinder as Geometry } from "Settings/Leva/Geometry/Cylinder";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    height,
    heightSegments,
    openEnded,
    radialSegments,
    radiusBottom,
    radiusTop,
    θLength,
    θStart,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Cylinder: folder({
            "XZ Plane": folder({
              radiusBottom: Geometry.radiusBottom(),
              radiusTop: Geometry.radiusTop(),
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
    radiusBottom,
    radiusTop,
    θLength,
    θStart,
  };
}

export { useLeva };
