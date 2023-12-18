import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  ANALOGUE = "Analogue",
  DIGITAL = "Digital",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { clock } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      clock: {
        label: "Clock",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    clock,
  };
}

export { LEVA_OPTION, useLeva };
