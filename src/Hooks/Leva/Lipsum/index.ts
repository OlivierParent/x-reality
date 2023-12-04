import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(LIPSUM: any) {
  const { lipsum } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      lipsum: {
        label: "Lipsum",
        options: LIPSUM,
        value: LIPSUM.Default,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    lipsum,
  };
}

export { useLeva };
