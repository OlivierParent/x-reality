import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { cube } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      cube: {
        label: "Animated Cube",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    cube,
  };
}

export { useLeva };
