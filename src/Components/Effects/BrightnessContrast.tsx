import {
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsBrightnessContrast as BrightnessContrastEffect } from "Settings/Leva/Effects/BrightnessContrast";

/**
 * Brightness/contrast effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/brightness-contrast
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/BrightnessContrastEffect.js~BrightnessContrastEffect.html
 */
const EffectsBrightnessContrast = () => {
  const { blendFunction, brightness, contrast } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Brightness/Contrast Effect": folder({
            blendFunction: BrightnessContrastEffect.blendFunction(),
            brightness: BrightnessContrastEffect.brightness(),
            contrast: BrightnessContrastEffect.contrast(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <BrightnessContrast
        blendFunction={blendFunction as BlendFunction}
        brightness={brightness}
        contrast={contrast}
      />
    </EffectComposer>
  );
};

export { EffectsBrightnessContrast as BrightnessContrast };
