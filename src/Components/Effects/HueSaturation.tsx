import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { MathUtils } from "three";

import { useLeva } from "Hooks/Leva/Effects/HueSaturation";

/**
 * Hue/saturation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/hue-saturation
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/HueSaturationEffect.js~HueSaturationEffect.html
 */
const EffectsHueSaturation = () => {
  // Leva Controls.
  const {
    blendFunction, //
    hue,
    saturation,
  } = useLeva();

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
