import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Chromatic aberration effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/chromatic-aberration
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ChromaticAberrationEffect.js~ChromaticAberrationEffect.html
 */
export namespace SettingsLevaEffectsChromaticAberration {
  export const blendFunction = Effects.blendFunction;

  export const offset = (
    value: { x: number; y: number } = { x: 0.0, y: 0.0 }
  ) => ({
    hint: "The color offset. Default = [0, 0]",
    label: "Offset",
    max: 0.01,
    min: -0.01,
    step: 0.001,
    value,
  });
}
