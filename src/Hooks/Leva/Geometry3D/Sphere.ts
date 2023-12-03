import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometrySphere as Geometry } from "Settings/Leva/Geometry/Sphere";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    heightSegments,
    radius,
    widthSegments,
    θLength,
    θStart,
    φLength,
    φStart,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Sphere: folder({
            "Transverse Plane": folder({
              radius: Geometry.radius(),
              widthSegments: Geometry.widthSegments(),
              Φ: folder({
                φStart: Geometry.ΦStart(),
                φLength: Geometry.ΦLength(),
              }),
            }),
            "Frontal Plane": folder({
              heightSegments: Geometry.heightSegments(),
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
    heightSegments,
    radius,
    widthSegments,
    θLength,
    θStart,
    φLength,
    φStart,
  };
}

export { useLeva };
