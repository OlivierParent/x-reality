import {
  BrightnessContrast,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import { useLeva } from "Hooks/Leva/Effects/BrightnessContrast";

/**
 * Brightness/contrast effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/brightness-contrast
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/BrightnessContrastEffect.js~BrightnessContrastEffect.html
 *
 * @returns {JSX.Element}
 */
const EffectsBrightnessContrast = (): JSX.Element => {
  // Leva Controls.
  const {
    blendFunction, //
    brightness,
    contrast,
  } = useLeva();

  return (
    <EffectComposer>
      <BrightnessContrast
        blendFunction={blendFunction as BlendFunction}
        brightness={brightness}
        contrast={contrast}
      />
    </EffectComposer>
  );
};

export { EffectsBrightnessContrast as BrightnessContrast };
