import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/Noise";

/**
 * Noise effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/noise
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/NoiseEffect.js~NoiseEffect.html
 */
const EffectsNoise = () => {
  // Leva Controls.
  const {
    blendFunction, //
    premultiply,
  } = useLeva();

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
