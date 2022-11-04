import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Grid effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/grid
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/GridEffect.js~GridEffect.html
 */
export namespace SettingsLevaEffectsGrid {
  export const blendFunction = Effects.blendFunction;

  export const lineWidth = (value: number = 0.0) => ({
    label: "Line Width",
    hint: "The line width of the grid pattern.",
    max: 5.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const scale = (value: number = 1.0) => ({
    label: "Scale",
    hint: "The scale of the grid pattern.",
    max: 5.0,
    min: 0.5,
    step: 0.05,
    value,
  });
}
