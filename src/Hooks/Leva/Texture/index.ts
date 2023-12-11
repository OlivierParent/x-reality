import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { texturedMesh } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      texturedMesh: {
        label: "Type",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    texturedMesh,
  };
}

export { useLeva };
