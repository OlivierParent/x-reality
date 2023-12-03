import { EffectComposer, SMAA } from "@react-three/postprocessing";
import { EdgeDetectionMode } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/SMAA";

/**
 * SMAA (Enhanced Subpixel Morphological Antialiasing) effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/smaa
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/SMAAEffect.js~SMAAEffect.html
 */
const EffectsSMAA = () => {
  // Leva Controls.
  const {
    edgeDetectionMode, //
    preset,
  } = useLeva();

  return (
    <EffectComposer>
      <SMAA
        edgeDetectionMode={edgeDetectionMode as EdgeDetectionMode}
        preset={preset as number}
      />
    </EffectComposer>
  );
};

export { EffectsSMAA as SMAA };
