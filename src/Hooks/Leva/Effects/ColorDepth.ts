import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsColorDepth as Effect } from "Settings/Leva/Effects/ColorDepth";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    bits, //
    blendFunction,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Color Depth Effect": folder({
            bits: Effect.bits(),
            blendFunction: Effect.blendFunction(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    bits,
    blendFunction,
  };
}

export { useLeva };
