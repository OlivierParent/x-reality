import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/Bloom";

/**
 * Bloom effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/bloom
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/BloomEffect.js~BloomEffect.html
 */
const EffectsBloom = () => {
  // Leva Controls.
  const {
    blendFunction, //
    intensity,
    luminanceSmoothing,
    luminanceThreshold,
  } = useLeva();

  return (
    <EffectComposer>
      <Bloom
        blendFunction={blendFunction as BlendFunction}
        intensity={intensity}
        kernelSize={KernelSize.LARGE}
        luminanceSmoothing={luminanceSmoothing}
        luminanceThreshold={luminanceThreshold}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  );
};

export { EffectsBloom as Bloom };
