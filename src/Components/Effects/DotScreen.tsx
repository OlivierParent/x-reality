import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { MathUtils } from "three";

import { useLeva } from "Hooks/Leva/Effects/DotScreen";

/**
 * Dot screen effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/dot-screen
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/DotScreenEffect.js~DotScreenEffect.html
 */
const EffectsDotScreen = () => {
  // Leva Controls.
  const {
    angle, //
    blendFunction,
    scale,
  } = useLeva();

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
