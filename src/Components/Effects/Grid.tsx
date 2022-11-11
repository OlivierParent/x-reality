import { EffectComposer, Grid } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsGrid as GridEffect } from "Settings/Leva/Effects/Grid";

/**
 * Grid effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/grid
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/GridEffect.js~GridEffect.html
 */
const EffectsGrid = () => {
  const { blendFunction, lineWidth, scale } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Grid Effect": folder({
            blendFunction: GridEffect.blendFunction(),
            lineWidth: GridEffect.lineWidth(),
            scale: GridEffect.scale(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <Grid
        blendFunction={blendFunction as BlendFunction}
        lineWidth={lineWidth}
        scale={scale}
      />
    </EffectComposer>
  );
};

export { EffectsGrid as Grid };
