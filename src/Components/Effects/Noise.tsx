import { EffectComposer, Noise } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsNoise as NoiseEffect } from "Settings/Leva/Effects/Noise";

/**
 * Noise effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/noise
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/NoiseEffect.js~NoiseEffect.html
 */
const EffectsNoise = () => {
  const { blendFunction, premultiply } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Noise Effect": folder({
            blendFunction: NoiseEffect.blendFunction(),
            premultiply: NoiseEffect.premultiply(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <Noise
        blendFunction={blendFunction as BlendFunction}
        premultiply={premultiply}
      />
    </EffectComposer>
  );
};

export { EffectsNoise as Noise };
