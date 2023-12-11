import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { particles } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      particles: {
        label: "Particles",
        options,
        value,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    particles,
  };
}

export { useLeva };
