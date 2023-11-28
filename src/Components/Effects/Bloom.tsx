import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsBloom as BloomEffect } from "Settings/Leva/Effects/Bloom";

/**
 * Bloom effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/bloom
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/BloomEffect.js~BloomEffect.html
 */
const EffectsBloom = () => {
  // Leva Controls.
  const { blendFunction, intensity, luminanceSmoothing, luminanceThreshold } =
    useControls(
      LEVA.SCHEMA.GENERAL,
      {
        "Effects Composer": folder(
          {
            "Bloom Effect": folder({
              blendFunction: BloomEffect.blendFunction(BlendFunction.SCREEN),
              intensity: BloomEffect.intensity(),
              luminanceSmoothing: BloomEffect.luminanceSmoothing(),
              luminanceThreshold: BloomEffect.luminanceThreshold(),
            }),
          },
          SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
        ),
      },
      SettingsLeva.folder(LEVA.ORDER.GENERAL)
    );

  return (
    <EffectComposer>
      <Bloom
        blendFunction={blendFunction as BlendFunction}
        intensity={intensity}
        kernelSize={KernelSize.LARGE}
        luminanceSmoothing={luminanceSmoothing}
        luminanceThreshold={luminanceThreshold}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  );
};

export { EffectsBloom as Bloom };
