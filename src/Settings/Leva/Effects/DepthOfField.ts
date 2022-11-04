import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Depth of Field effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/depth-of-field
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/DepthOfFieldEffect.js~DepthOfFieldEffect.html
 */
export namespace SettingsLevaEffectsDepthOfField {
  export const blendFunction = Effects.blendFunction;

  export const bokehScale = (value: number = 1.0) => ({
    label: "Bokeh Scale",
    hint: "The scale of the bokeh blur.",
    max: 16.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const focalLength = (value: number = 0.1) => ({
    label: "Focal Length",
    hint: "The focal length. Range = [0.0, 1.0]",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const focusDistance = (value: number = 0.0) => ({
    label: "Focus Distance",
    hint: "The normalized focus distance. Range = [0.0, 1.0].",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });
}
