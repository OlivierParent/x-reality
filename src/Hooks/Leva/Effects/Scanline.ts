import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsScanline as Effect } from "Settings/Leva/Effects/Scanline";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    density,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Scanline Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.OVERLAY),
            density: Effect.density(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    density,
  };
}

export { useLeva };
