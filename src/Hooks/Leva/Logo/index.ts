import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { logo } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      logo: {
        label: "Logo",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    logo,
  };
}

export { useLeva };
