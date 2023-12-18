import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  DEMO = "Demo",
  NONE = "\u2014None\u2014",
  STUDIO = "Studio",
  THREE_POINT = "Three Point",
  THREE_POINT_VOLUMETRIC = "Three Point (Volumetric)",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { lighting } = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      lighting: {
        label: "Lighting",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  return {
    lighting,
  };
}

export { LEVA_OPTION, useLeva };
