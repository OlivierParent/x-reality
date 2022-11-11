import { ColorDepth, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsColorDepth as ColorDepthEffect } from "Settings/Leva/Effects/ColorDepth";

/**
 * Color depth effect.
 *
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ColorDepthEffect.js~ColorDepthEffect.html
 */
const EffectsColorDepth = () => {
  const { bits, blendFunction } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Color Depth Effect": folder({
            bits: ColorDepthEffect.bits(),
            blendFunction: ColorDepthEffect.blendFunction(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <ColorDepth bits={bits} blendFunction={blendFunction as BlendFunction} />
    </EffectComposer>
  );
};

export { EffectsColorDepth as ColorDepth };
