import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  CIRCLE = "Circle",
  NONE = "\u2014None\u2014",
  PLANE = "Plane",
  RING = "Ring",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { geometry2DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          geometry2DName: {
            label: "Geometry 2D",
            options,
            value,
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

export { LEVA_OPTION, useLeva };
