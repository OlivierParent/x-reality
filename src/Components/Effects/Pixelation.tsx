import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsPixelation as PixelationEffect } from "Settings/Leva/Effects/Pixelation";

/**
 * Pixelation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/pixelation
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/PixelationEffect.js~PixelationEffect.html
 */
const EffectsPixelation = () => {
  const { granularity } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Pixelation Effect": folder({
            granularity: PixelationEffect.granularity(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <Pixelation granularity={granularity} />
    </EffectComposer>
  );
};

export { EffectsPixelation as Pixelation };
