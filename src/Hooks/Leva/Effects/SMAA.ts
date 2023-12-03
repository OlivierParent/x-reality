import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsSMAA as Effect } from "Settings/Leva/Effects/SMAA";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    edgeDetectionMode, //
    preset,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "SMAA Effect": folder({
            edgeDetectionMode: Effect.edgeDetectionMode(),
            preset: Effect.preset(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    edgeDetectionMode,
    preset,
  };
}

export { useLeva };
