import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/ToneMapping";

/**
 * ToneMapping effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/tone-mapping
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ToneMappingEffect.js~ToneMappingEffect.html
 */
const EffectsToneMapping = () => {
  // Leva Controls.
  const {
    adaptationRate,
    averageLuminance,
    blendFunction,
    middleGrey,
    resolution,
  } = useLeva();

  return (
    <EffectComposer>
      <ToneMapping
        adaptationRate={adaptationRate}
        averageLuminance={averageLuminance}
        blendFunction={blendFunction as BlendFunction}
        middleGrey={middleGrey}
        resolution={resolution}
      />
    </EffectComposer>
  );
};

export { EffectsToneMapping as ToneMapping };
