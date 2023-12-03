import { EffectComposer, Sepia } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/Sepia";

/**
 * Sepia effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/sepia
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/SepiaEffect.js~SepiaEffect.html
 */
const EffectsSepia = () => {
  // Leva Controls.
  const {
    blendFunction, //
    intensity,
  } = useLeva();

  return (
    <EffectComposer>
      <Sepia
        blendFunction={blendFunction as BlendFunction}
        intensity={intensity}
      />
    </EffectComposer>
  );
};

export { EffectsSepia as Sepia };
