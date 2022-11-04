import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Brightness/contrast effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/brightness-contrast
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/BrightnessContrastEffect.js~BrightnessContrastEffect.html
 */
export namespace SettingsLevaEffectsBrightnessContrast {
  export const blendFunction = Effects.blendFunction;

  export const brightness = (value: number = 0.0) => ({
    label: "Brightness",
    hint: "Scene brightness shift. Default = 0.",
    max: 1.0,
    min: -1.0,
    step: 0.01,
    value,
  });

  export const contrast = (value: number = 0.0) => ({
    label: "Contrast",
    hint: "Scene contrast shift. Default = 0.",
    max: 1.0,
    min: -1.0,
    step: 0.01,
    value,
  });
}
