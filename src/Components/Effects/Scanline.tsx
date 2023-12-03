import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/Scanline";

/**
 * Scanline effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/scanline
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ScanlineEffect.js~ScanlineEffect.html
 */
const EffectsScanline = () => {
  // Leva Controls.
  const {
    density, //
    blendFunction,
  } = useLeva();

  return (
    <EffectComposer>
      <Scanline
        blendFunction={blendFunction as BlendFunction}
        density={density}
      />
    </EffectComposer>
  );
};

export { EffectsScanline as Scanline };
