import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Color depth effect.
 *
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ColorDepthEffect.js~ColorDepthEffect.html
 */
export namespace SettingsLevaEffectsColorDepth {
  export const bits = (value: number = 16) => ({
    label: "Bits",
    hint: "The color bit depth. Default = 16.",
    max: 24,
    min: 0,
    step: 1,
    value,
  });

  export const blendFunction = Effects.blendFunction;
}
