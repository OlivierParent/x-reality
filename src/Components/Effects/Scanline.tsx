import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsScanline as ScanlineEffect } from "Settings/Leva/Effects/Scanline";

/**
 * Scanline effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/scanline
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ScanlineEffect.js~ScanlineEffect.html
 */
const EffectsScanline = () => {
  const { density, blendFunction } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Scanline Effect": folder({
            blendFunction: ScanlineEffect.blendFunction(),
            density: ScanlineEffect.density(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

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
