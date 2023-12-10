import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(BUTTON: any) {
  const { button } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      button: {
        label: "Button",
        options: BUTTON,
        value: BUTTON["GreenSock GSAP"],
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    button,
  };
}

export { useLeva };
