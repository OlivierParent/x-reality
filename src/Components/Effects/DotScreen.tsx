import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";
import { MathUtils } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaEffectsDotScreen as DotScreenEffect } from "Settings/Leva/Effects/DotScreen";

/**
 * Dot screen effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/dot-screen
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/DotScreenEffect.js~DotScreenEffect.html
 */
const EffectsDotScreen = () => {
  const { angle, blendFunction, scale } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Dot Screen Effect": folder({
            angle: DotScreenEffect.angle(),
            blendFunction: DotScreenEffect.blendFunction(),
            scale: DotScreenEffect.scale(),
          }),
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <EffectComposer>
      <DotScreen
        angle={MathUtils.degToRad(angle)}
        blendFunction={blendFunction as BlendFunction}
        scale={scale}
      />
    </EffectComposer>
  );
};

export { EffectsDotScreen as DotScreen };
