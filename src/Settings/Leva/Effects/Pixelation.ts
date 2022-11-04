/**
 * Pixelation effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/pixelation
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/PixelationEffect.js~PixelationEffect.html
 */
export namespace SettingsLevaEffectsPixelation {
  export const granularity = (value: number = 30.0) => ({
    label: "Granularity",
    hint: "The pixel granularity. Default = 30.0.",
    max: 99.9,
    min: 0.0,
    step: 0.5,
    value,
  });
}
