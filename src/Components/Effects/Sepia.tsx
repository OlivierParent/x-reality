import { EffectComposer, Sepia } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { SettingsLevaEffectsSepia as SepiaEffect } from "Settings/Leva/Effects/Sepia";

/**
 * Sepia effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/sepia
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/SepiaEffect.js~SepiaEffect.html
 */
const EffectsSepia = () => {
  const { blendFunction, intensity } = useControls("General", {
    "Effects Composer": folder({
      "Sepia Effect": folder({
        blendFunction: SepiaEffect.blendFunction(),
        intensity: SepiaEffect.intensity(),
      }),
    }),
  });

  return (
    <EffectComposer>
      <Sepia
        blendFunction={blendFunction as BlendFunction}
        intensity={intensity}
      />
    </EffectComposer>
  );
};

export { EffectsSepia as Sepia };
