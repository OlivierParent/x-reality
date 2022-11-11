import { DepthOfField, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction, Resolution } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsDepthOfField as DepthOfFieldEffect } from "Settings/Leva/Effects/DepthOfField";

/**
 * Depth of Field effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/depth-of-field
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/DepthOfFieldEffect.js~DepthOfFieldEffect.html
 */
const EffectsDepthOfField = () => {
  const { blendFunction, bokehScale, focalLength, focusDistance } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Bloom Effect": folder({
            blendFunction: DepthOfFieldEffect.blendFunction(),
            bokehScale: DepthOfFieldEffect.bokehScale(),
            focalLength: DepthOfFieldEffect.focalLength(),
            focusDistance: DepthOfFieldEffect.focusDistance(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <DepthOfField
        blendFunction={blendFunction as BlendFunction}
        bokehScale={bokehScale}
        focalLength={focalLength}
        focusDistance={focusDistance}
        height={Resolution.AUTO_SIZE}
        width={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  );
};

export { EffectsDepthOfField as DepthOfField };
