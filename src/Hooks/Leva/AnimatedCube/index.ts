import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  DEFAULT = "\u2014Default\u2014",
  DEFAULT_REPLACED = "Default with object replaced",
  FRAMER_MOTION_3D = "Framer Motion 3D",
  GREENSOCK_GSAP = "GreenSock GSAP",
}

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

export { LEVA_OPTION, useLeva };
