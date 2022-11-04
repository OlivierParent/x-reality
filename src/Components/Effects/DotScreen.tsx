import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";
import { MathUtils } from "three";

import { SettingsLevaEffectsDotScreen as DotScreenEffect } from "Settings/Leva/Effects/DotScreen";

/**
 * Dot screen effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/dot-screen
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/DotScreenEffect.js~DotScreenEffect.html
 */
const EffectsDotScreen = () => {
  const { angle, blendFunction, scale } = useControls("General", {
    "Effects Composer": folder({
      "Dot Screen Effect": folder({
        angle: DotScreenEffect.angle(),
        blendFunction: DotScreenEffect.blendFunction(),
        scale: DotScreenEffect.scale(),
      }),
    }),
  });

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
