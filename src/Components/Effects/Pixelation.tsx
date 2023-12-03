import { EffectComposer, Pixelation } from "@react-three/postprocessing";

import { useLeva } from "Hooks/Leva/Effects/Pixelation";

/**
 * Pixelation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/pixelation
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/PixelationEffect.js~PixelationEffect.html
 */
const EffectsPixelation = () => {
  // Leva Controls.
  const {
    granularity, //
  } = useLeva();

  return (
    <EffectComposer>
      <Pixelation granularity={granularity} />
    </EffectComposer>
  );
};

export { EffectsPixelation as Pixelation };
