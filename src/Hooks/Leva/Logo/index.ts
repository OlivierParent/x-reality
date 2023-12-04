import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(LOGO: any) {
  const { logo } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      logo: {
        label: "Logo",
        options: LOGO,
        value: LOGO.Single,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    logo,
  };
}

export { useLeva };
