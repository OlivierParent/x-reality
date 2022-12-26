import { GlitchMode } from "postprocessing";
import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Glitch effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/glitch
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/GlitchEffect.js~GlitchEffect.html
 */
export namespace SettingsLevaEffectsGlitch {
  export const active = (value: boolean = true) => ({
    label: "Active",
    hint: "Indicates whether the glitch effect is currently active.",
    value,
  });

  export const blendFunction = Effects.blendFunction;

  export const columns = (value: number = 0.05) => ({
    label: "Columns",
    hint: "The scale of the blocky glitch columns.",
    max: 5.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const delay = (
    value: { minimum: number; maximum: number } = { minimum: 1.5, maximum: 3.5 }
  ) => ({
    label: "Delay",
    hint: "The minimum and maximum delay between glitch activations in seconds.",
    max: 5.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const dtSize = (value: number = 64) => ({
    label: "dt Size",
    hint: "The size of the generated noise map. Will be ignored if a perturbation map is provided.",
    max: 256,
    min: 0,
    step: 1,
    value,
  });

  export const duration = (
    value: { minimum: number; maximum: number } = { minimum: 0.6, maximum: 1.0 }
  ) => ({
    label: "Duration",
    hint: "The minimum and maximum duration of a glitch in seconds.",
    max: 5.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const mode = (value: GlitchMode = GlitchMode.SPORADIC) => ({
    label: "Glitch Mode",
    options: GlitchMode,
    value,
  });

  export const perturbationMap = (value: any = null) => ({
    label: "PerturbationMap",
    hint: "A perturbation map. If none is provided, a noise texture will be created.",
    value,
  });

  export const ratio = (value: number = 0.85) => ({
    label: "Ratio",
    hint: "Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.",
    max: 1.0,
    min: 0.0,
    step: 0.05,
    value,
  });

  export const strength = (
    value: { weak: number; strong: number } = { weak: 0.3, strong: 1.0 }
  ) => ({
    label: "Strength",
    hint: "The strength of weak and strong glitches.",
    max: 5.0,
    min: 0.0,
    step: 0.1,
    value,
  });
}
