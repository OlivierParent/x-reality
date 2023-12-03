import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsNoise as Effect } from "Settings/Leva/Effects/Noise";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    premultiply,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Noise Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.SCREEN),
            premultiply: Effect.premultiply(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    premultiply,
  };
}

export { useLeva };
