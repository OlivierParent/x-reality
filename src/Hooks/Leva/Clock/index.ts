import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(CLOCK: any) {
  const { clock } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      clock: {
        label: "Clock",
        options: CLOCK,
        value: CLOCK.Analogue,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    clock,
  };
}

export { useLeva };
