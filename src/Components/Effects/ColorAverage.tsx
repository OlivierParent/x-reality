import { ColorAverage, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsColorAverage as ColorAverageEffect } from "Settings/Leva/Effects/ColorAverage";

/**
 * Color average effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/color-average
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ColorAverageEffect.js~ColorAverageEffect.html
 */
const EffectsColorAverage = () => {
  const { blendFunction } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Color Average Effect": folder({
            blendFunction: ColorAverageEffect.blendFunction(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <ColorAverage blendFunction={blendFunction as BlendFunction} />
    </EffectComposer>
  );
};

export { EffectsColorAverage as ColorAverage };
