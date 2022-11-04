import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import { SettingsLevaEffectsPixelation as PixelationEffect } from "Settings/Leva/Effects/Pixelation";

/**
 * Pixelation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/pixelation
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/PixelationEffect.js~PixelationEffect.html
 */
const EffectsPixelation = () => {
  const { granularity } = useControls("General", {
    "Effects Composer": folder({
      "Pixelation Effect": folder({
        granularity: PixelationEffect.granularity(),
      }),
    }),
  });

  return (
    <EffectComposer>
      <Pixelation granularity={granularity} />
    </EffectComposer>
  );
};

export { EffectsPixelation as Pixelation };
