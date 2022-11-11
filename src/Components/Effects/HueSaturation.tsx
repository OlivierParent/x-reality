import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";
import { MathUtils } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsHueSaturation as HueSaturationEffect } from "Settings/Leva/Effects/HueSaturation";

/**
 * Hue/saturation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/hue-saturation
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/HueSaturationEffect.js~HueSaturationEffect.html
 */
const EffectsHueSaturation = () => {
  const { blendFunction, hue, saturation } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Hue/Saturation Effect": folder({
            blendFunction: HueSaturationEffect.blendFunction(),
            hue: HueSaturationEffect.hue(),
            saturation: HueSaturationEffect.saturation(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <HueSaturation
        blendFunction={blendFunction as BlendFunction}
        hue={MathUtils.degToRad(hue)}
        saturation={saturation}
      />
    </EffectComposer>
  );
};

export { EffectsHueSaturation as HueSaturation };
