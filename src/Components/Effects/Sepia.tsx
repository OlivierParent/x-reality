import { EffectComposer, Sepia } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsSepia as SepiaEffect } from "Settings/Leva/Effects/Sepia";

/**
 * Sepia effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/sepia
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/SepiaEffect.js~SepiaEffect.html
 */
const EffectsSepia = () => {
  // Leva Controls.
  const { blendFunction, intensity } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Sepia Effect": folder({
            blendFunction: SepiaEffect.blendFunction(BlendFunction.NORMAL),
            intensity: SepiaEffect.intensity(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

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
