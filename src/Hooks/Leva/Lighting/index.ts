import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(LIGHTING: any) {
  const { lighting } = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      lighting: {
        label: "Lighting",
        options: {
          "—None—                ": LIGHTING.None,
          "Demo                  ": LIGHTING.Demo,
          "Studio                ": LIGHTING.Studio,
          "Three Point           ": LIGHTING.ThreePoint,
          "Three Point Volumetric": LIGHTING.ThreePointVolumetric,
        },
        value: LIGHTING.ThreePointVolumetric,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  return {
    lighting,
  };
}

export { useLeva };
