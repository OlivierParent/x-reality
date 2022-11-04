import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { SettingsLevaEffectsVignette as VignetteEffect } from "Settings/Leva/Effects/Vignette";

/**
 * Vignette effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/vignette
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/VignetteEffect.js~VignetteEffect.html
 */
const EffectsVignette = () => {
  const { blendFunction, darkness, eskil, offset } = useControls("General", {
    "Effects Composer": folder({
      "Vignette Effect": folder({
        blendFunction: VignetteEffect.blendFunction(),
        darkness: VignetteEffect.darkness(),
        eskil: VignetteEffect.eskil(),
        offset: VignetteEffect.offset(),
      }),
    }),
  });

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
