import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  DEFAULT = "\u2014Default\u2014",
  SUZANNE = "Suzanne",
  SUZANNE_TWO = "Suzanne 2",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { animation } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      animation: {
        label: "Animation",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    animation,
  };
}

export { LEVA_OPTION, useLeva };
