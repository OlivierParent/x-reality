import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Noise effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/noise
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/NoiseEffect.js~NoiseEffect.html
 */
export namespace SettingsLevaEffectsNoise {
  export const blendFunction = Effects.blendFunction;

  export const premultiply = (value: boolean = false) => ({
    label: "Luminance Smoothing",
    hint: "Whether the noise should be multiplied with the input color.",
    value,
  });
}
