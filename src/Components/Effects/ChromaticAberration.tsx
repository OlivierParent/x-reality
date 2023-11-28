import {
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsChromaticAberration as ChromaticAberrationEffect } from "Settings/Leva/Effects/ChromaticAberration";

/**
 * Chromatic aberration effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/chromatic-aberration
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ChromaticAberrationEffect.js~ChromaticAberrationEffect.html
 */
const EffectsChromaticAberration = () => {
  // Leva Controls.
  const { blendFunction, offset } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Chromatic Aberration Effect": folder({
            blendFunction: ChromaticAberrationEffect.blendFunction(
              BlendFunction.NORMAL
            ),
            offset: ChromaticAberrationEffect.offset(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <ChromaticAberration
        blendFunction={blendFunction as BlendFunction}
        modulationOffset={0}
        offset={new Vector2(offset.x, offset.y)}
        radialModulation={true}
      />
    </EffectComposer>
  );
};

export { EffectsChromaticAberration as ChromaticAberration };
