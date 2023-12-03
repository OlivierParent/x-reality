import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, Resolution } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/DepthOfField";

/**
 * Depth of Field effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/depth-of-field
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/DepthOfFieldEffect.js~DepthOfFieldEffect.html
 */
const EffectsDepthOfField = () => {
  // Leva Controls.
  const {
    blendFunction, //
    bokehScale,
    focalLength,
    focusDistance,
  } = useLeva();

  return (
    <EffectComposer>
      <DepthOfField
        blendFunction={blendFunction as BlendFunction}
        bokehScale={bokehScale}
        focalLength={focalLength}
        focusDistance={focusDistance}
        height={Resolution.AUTO_SIZE}
        width={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  );
};

export { EffectsDepthOfField as DepthOfField };
