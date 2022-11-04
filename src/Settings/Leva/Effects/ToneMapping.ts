import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * ToneMapping effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/tone-mapping
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ToneMappingEffect.js~ToneMappingEffect.html
 */
export namespace SettingsLevaEffectsToneMapping {
  export const adaptationRate = (value: number = 1.0) => ({
    label: "Adaption Rate",
    hint: "The luminance adaptation rate. Default = 1.0.",
    max: 9.9,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const averageLuminance = (value: number = 1.0) => ({
    label: "Average Luminance",
    hint: "The average luminance. Used for the non-adaptive Reinhard operator. Default = 1.0.",
    max: 9.9,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const blendFunction = Effects.blendFunction;

  export const middleGrey = (value: number = 0.6) => ({
    label: "Middle Grey",
    hint: "The middle grey factor. Default = 0.6.",
    max: 2.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const resolution = (value: number = 256) => ({
    label: "Resolution",
    hint: "The resolution of the luminance texture. Must be a power of two. Default = 256.",
    options: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
    value,
  });
}
