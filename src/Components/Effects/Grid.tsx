import { EffectComposer, Grid } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/Grid";

/**
 * Grid effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/grid
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/GridEffect.js~GridEffect.html
 */
const EffectsGrid = () => {
  // Leva Controls.
  const {
    blendFunction, //
    lineWidth,
    scale,
  } = useLeva();

  return (
    <EffectComposer>
      <Grid
        blendFunction={blendFunction as BlendFunction}
        lineWidth={lineWidth}
        scale={scale}
      />
    </EffectComposer>
  );
};

export { EffectsGrid as Grid };
