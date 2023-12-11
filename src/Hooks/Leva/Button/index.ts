import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

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

export { useLeva };
