import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(PARTICLES: any) {
  const { particles } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      particles: {
        label: "Particles",
        options: PARTICLES,
        value: PARTICLES["—Default—"],
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    particles,
  };
}

export { useLeva };
