import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Bloom effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/bloom
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/BloomEffect.js~BloomEffect.html
 */
export namespace SettingsLevaEffectsBloom {
  export const blendFunction = Effects.blendFunction;

  export const intensity = Effects.intensity;

  export const luminanceSmoothing = (value: number = 0.025) => ({
    label: "Luminance Smoothing",
    hint: "Controls the smoothness of the luminance threshold. Range is [0, 1]. Default = 0.025.",
    max: 1.0,
    min: 0.0,
    step: 0.005,
    value,
  });

  export const luminanceThreshold = (value: number = 0.9) => ({
    label: "Luminance Threshold",
    hint: "The luminance threshold. Raise this value to mask out darker elements in the scene. Range is [0, 1].",
    max: 1.0,
    min: 0.0,
    step: 0.05,
    value,
  });
}
