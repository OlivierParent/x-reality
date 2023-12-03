import { ColorDepth, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/ColorDepth";

/**
 * Color depth effect.
 *
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ColorDepthEffect.js~ColorDepthEffect.html
 */
const EffectsColorDepth = () => {
  // Leva Controls.
  const {
    bits, //
    blendFunction,
  } = useLeva();

  return (
    <EffectComposer>
      <ColorDepth bits={bits} blendFunction={blendFunction as BlendFunction} />
    </EffectComposer>
  );
};

export { EffectsColorDepth as ColorDepth };
