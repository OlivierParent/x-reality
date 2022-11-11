import { EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsToneMapping as ToneMappingEffect } from "Settings/Leva/Effects/ToneMapping";

/**
 * ToneMapping effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/tone-mapping
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ToneMappingEffect.js~ToneMappingEffect.html
 */
const EffectsToneMapping = () => {
  const {
    adaptationRate,
    averageLuminance,
    blendFunction,
    middleGrey,
    resolution,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "ToneMapping Effect": folder({
            adaptationRate: ToneMappingEffect.adaptationRate(),
            averageLuminance: ToneMappingEffect.averageLuminance(),
            blendFunction: ToneMappingEffect.blendFunction(),
            middleGrey: ToneMappingEffect.middleGrey(),
            resolution: ToneMappingEffect.resolution(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <ToneMapping
        adaptationRate={adaptationRate}
        averageLuminance={averageLuminance}
        blendFunction={blendFunction as BlendFunction}
        middleGrey={middleGrey}
        resolution={resolution}
      />
    </EffectComposer>
  );
};

export { EffectsToneMapping as ToneMapping };
