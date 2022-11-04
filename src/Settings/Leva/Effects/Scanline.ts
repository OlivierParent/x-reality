import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Scanline effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/scanline
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/ScanlineEffect.js~ScanlineEffect.html
 */

export namespace SettingsLevaEffectsScanline {
  export const blendFunction = Effects.blendFunction;

  export const density = (value: number = 1.25) => ({
    label: "Density",
    hint: "The scanline density. Default = 1.25.",
    max: 9.0,
    min: 0.0,
    step: 0.01,
    value,
  });
}
