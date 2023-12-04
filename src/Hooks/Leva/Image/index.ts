import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(IMAGE: any) {
  const { image } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      image: {
        label: "Image",
        options: IMAGE,
        value: IMAGE.Default,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    image,
  };
}

export { useLeva };
