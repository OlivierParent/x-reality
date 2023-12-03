import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/Vignette";

/**
 * Vignette effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/vignette
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/VignetteEffect.js~VignetteEffect.html
 */
const EffectsVignette = () => {
  // Leva Controls.
  const {
    blendFunction, //
    darkness,
    eskil,
    offset,
  } = useLeva();

  return (
    <EffectComposer>
      <Vignette
        blendFunction={blendFunction as BlendFunction}
        darkness={darkness}
        eskil={eskil}
        offset={offset}
      />
    </EffectComposer>
  );
};

export { EffectsVignette as Vignette };
