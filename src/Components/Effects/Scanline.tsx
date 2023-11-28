import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsScanline as ScanlineEffect } from "Settings/Leva/Effects/Scanline";

/**
 * Scanline effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/scanline
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ScanlineEffect.js~ScanlineEffect.html
 */
const EffectsScanline = () => {
  // Leva Controls.
  const { density, blendFunction } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Scanline Effect": folder({
            blendFunction: ScanlineEffect.blendFunction(BlendFunction.OVERLAY),
            density: ScanlineEffect.density(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
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
