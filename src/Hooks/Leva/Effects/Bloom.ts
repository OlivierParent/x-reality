import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsBloom as Effect } from "Settings/Leva/Effects/Bloom";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    intensity,
    luminanceSmoothing,
    luminanceThreshold,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Bloom Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.SCREEN),
            intensity: Effect.intensity(),
            luminanceSmoothing: Effect.luminanceSmoothing(),
            luminanceThreshold: Effect.luminanceThreshold(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    intensity,
    luminanceSmoothing,
    luminanceThreshold,
  };
}

export { useLeva };
