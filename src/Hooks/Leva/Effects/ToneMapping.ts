import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsToneMapping as Effect } from "Settings/Leva/Effects/ToneMapping";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    adaptationRate,
    averageLuminance,
    blendFunction,
    middleGrey,
    resolution,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "ToneMapping Effect": folder({
            adaptationRate: Effect.adaptationRate(),
            averageLuminance: Effect.averageLuminance(),
            blendFunction: Effect.blendFunction(),
            middleGrey: Effect.middleGrey(),
            resolution: Effect.resolution(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    adaptationRate,
    averageLuminance,
    blendFunction,
    middleGrey,
    resolution,
  };
}

export { useLeva };
