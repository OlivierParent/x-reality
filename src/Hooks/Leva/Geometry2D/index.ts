import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(GEOMETRY_2D: any) {
  const { geometry2DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          geometry2DName: {
            label: "Geometry 2D",
            options: {
              "—None— ": GEOMETRY_2D.NONE,
              "Plane  ": GEOMETRY_2D.PLANE,
              "Circle ": GEOMETRY_2D.CIRCLE,
              "Ring   ": GEOMETRY_2D.RING,
            },
            value: GEOMETRY_2D.PLANE,
          },
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    geometry2DName: geometry2DName as unknown as string,
  };
}

export { useLeva };
