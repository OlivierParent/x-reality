import {
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";

import { useLeva } from "Hooks/Leva/Effects/ChromaticAberration";

/**
 * Chromatic aberration effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/chromatic-aberration
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ChromaticAberrationEffect.js~ChromaticAberrationEffect.html
 */
const EffectsChromaticAberration = () => {
  // Leva Controls.
  const {
    blendFunction, //
    offset,
  } = useLeva();

  return (
    <EffectComposer>
      <ChromaticAberration
        blendFunction={blendFunction as BlendFunction}
        modulationOffset={0}
        offset={new Vector2(offset.x, offset.y)}
        radialModulation={true}
      />
    </EffectComposer>
  );
};

export { EffectsChromaticAberration as ChromaticAberration };
