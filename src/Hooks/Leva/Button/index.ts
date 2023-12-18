import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  DEFAULT = "\u2014Default\u2014",
  FRAMER_MOTION_3D = "Framer Motion 3D",
  GREENSOCK_GSAP = "GreenSock GSAP",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { button } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      button: {
        label: "Button",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    button,
  };
}

export { LEVA_OPTION, useLeva };
