import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  DEFAULT = "\u2014Default\u2014",
  SVG = "SVG",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { image } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      image: {
        label: "Image",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    image,
  };
}

export { LEVA_OPTION, useLeva };
