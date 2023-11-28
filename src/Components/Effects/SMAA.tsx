import { EffectComposer, SMAA } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { EdgeDetectionMode } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsSMAA as SMAAEffect } from "Settings/Leva/Effects/SMAA";

/**
 * SMAA (Enhanced Subpixel Morphological Antialiasing) effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/smaa
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/SMAAEffect.js~SMAAEffect.html
 */
const EffectsSMAA = () => {
  // Leva Controls.
  const { edgeDetectionMode, preset } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "SMAA Effect": folder({
            edgeDetectionMode: SMAAEffect.edgeDetectionMode(),
            preset: SMAAEffect.preset(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <SMAA
        edgeDetectionMode={edgeDetectionMode as EdgeDetectionMode}
        preset={preset as number}
      />
    </EffectComposer>
  );
};

export { EffectsSMAA as SMAA };
