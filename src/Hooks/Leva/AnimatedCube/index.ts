import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(ANIMATED_CUBE: any) {
  const { cube } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      cube: {
        label: "Animated Cube",
        options: ANIMATED_CUBE,
        value: ANIMATED_CUBE["Framer Motion 3D"],
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    cube,
  };
}

export { useLeva };
