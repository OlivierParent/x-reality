import {
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { SettingsLevaEffectsChromaticAberration as ChromaticAberrationEffect } from "Settings/Leva/Effects/ChromaticAberration";
import { Vector2 } from "three";

/**
 * Chromatic aberration effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/chromatic-aberration
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ChromaticAberrationEffect.js~ChromaticAberrationEffect.html
 */
const EffectsChromaticAberration = () => {
  const { blendFunction, offset } = useControls("General", {
    "Effects Composer": folder({
      "Chromatic Aberration Effect": folder({
        blendFunction: ChromaticAberrationEffect.blendFunction(),
        offset: ChromaticAberrationEffect.offset(),
      }),
    }),
  });

  return (
    <EffectComposer>
      <ChromaticAberration
        blendFunction={blendFunction as BlendFunction}
        offset={new Vector2(offset.x, offset.y)}
      />
    </EffectComposer>
  );
};

export { EffectsChromaticAberration as ChromaticAberration };
