import { ColorAverage, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { SettingsLevaEffectsColorAverage as ColorAverageEffect } from "Settings/Leva/Effects/ColorAverage";

/**
 * Color average effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/color-average
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ColorAverageEffect.js~ColorAverageEffect.html
 */
const EffectsColorAverage = () => {
  const { blendFunction } = useControls("General", {
    "Effects Composer": folder({
      "Color Average Effect": folder({
        blendFunction: ColorAverageEffect.blendFunction(),
      }),
    }),
  });

  return (
    <EffectComposer>
      <ColorAverage blendFunction={blendFunction as BlendFunction} />
    </EffectComposer>
  );
};

export { EffectsColorAverage as ColorAverage };
