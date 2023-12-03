import { ColorAverage, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/ColorAverage";

/**
 * Color average effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/color-average
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ColorAverageEffect.js~ColorAverageEffect.html
 */
const EffectsColorAverage = () => {
  // Leva Controls.
  const {
    blendFunction, //
  } = useLeva();

  return (
    <EffectComposer>
      <ColorAverage blendFunction={blendFunction as BlendFunction} />
    </EffectComposer>
  );
};

export { EffectsColorAverage as ColorAverage };
