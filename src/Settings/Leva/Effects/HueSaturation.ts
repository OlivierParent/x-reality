import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Hue/saturation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/hue-saturation
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/HueSaturationEffect.js~HueSaturationEffect.html
 */
export namespace SettingsLevaEffectsHueSaturation {
  export const blendFunction = Effects.blendFunction;

  export const hue = (value: number = 0) => ({
    label: "Hue (degrees)",
    hint: "The hue in radians converted to degrees.",
    max: 180,
    min: -180,
    step: 1,
    value,
  });

  export const saturation = (value: number = 0.0) => ({
    label: "Saturation",
    hint: "The saturation factor, ranging from -1 to 1, where 0 means no change.",
    max: 1.0,
    min: -1.0,
    step: 0.01,
    value,
  });
}
