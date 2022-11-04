import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Vignette effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/vignette
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/VignetteEffect.js~VignetteEffect.html
 */
export namespace SettingsLevaEffectsVignette {
  export const blendFunction = Effects.blendFunction;

  export const darkness = (value: number = 0.5) => ({
    label: "Darkness",
    hint: "The vignette darkness. Default = 0.5.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const eskil = (value: boolean = false) => ({
    label: "Eskil",
    hint: "Enables Eskil's vignette technique. Default = false.",
    value,
  });

  export const offset = (value: number = 0.5) => ({
    label: "Offset",
    hint: "The vignette offset. Default = 0.5.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });
}
