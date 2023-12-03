import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsHueSaturation as Effect } from "Settings/Leva/Effects/HueSaturation";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    hue,
    saturation,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Hue/Saturation Effect": folder({
            blendFunction: Effect.blendFunction(),
            hue: Effect.hue(),
            saturation: Effect.saturation(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    hue,
    saturation,
  };
}

export { useLeva };
