import { EffectComposer, SMAA } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { EdgeDetectionMode } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsSMAA as SMAAEffect } from "Settings/Leva/Effects/SMAA";

/**
 * SMAA (Enhanced Subpixel Morphological Antialiasing) effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/smaa
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/SMAAEffect.js~SMAAEffect.html
 */
const EffectsSMAA = () => {
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
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
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
