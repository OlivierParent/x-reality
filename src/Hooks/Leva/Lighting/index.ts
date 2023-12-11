import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

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

export { useLeva };
