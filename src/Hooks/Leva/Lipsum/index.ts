import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  DEFAULT = "\u2014Default\u2014",
  FONTS = "Fonts",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { lipsum } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      lipsum: {
        label: "Lipsum",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    lipsum,
  };
}

export { LEVA_OPTION, useLeva };
