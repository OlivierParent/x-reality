import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { SettingsLevaEffectsScanline as ScanlineEffect } from "Settings/Leva/Effects/Scanline";

/**
 * Scanline effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/scanline
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ScanlineEffect.js~ScanlineEffect.html
 */
const EffectsScanline = () => {
  const { density, blendFunction } = useControls("General", {
    "Effects Composer": folder({
      "Scanline Effect": folder({
        blendFunction: ScanlineEffect.blendFunction(),
        density: ScanlineEffect.density(),
      }),
    }),
  });

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
