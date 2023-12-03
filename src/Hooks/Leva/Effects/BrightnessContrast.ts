import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsBrightnessContrast as Effect } from "Settings/Leva/Effects/BrightnessContrast";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    brightness,
    contrast,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Brightness/Contrast Effect": folder({
            blendFunction: Effect.blendFunction(),
            brightness: Effect.brightness(),
            contrast: Effect.contrast(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    brightness,
    contrast,
  };
}

export { useLeva };
