import { EdgeDetectionMode, SMAAPreset } from "postprocessing";

/**
 * SMAA (Enhanced Subpixel Morphological Antialiasing) effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/smaa
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/SMAAEffect.js~SMAAEffect.html
 */
export namespace SettingsLevaEffectsSMAA {
  export const edgeDetectionMode = (
    value: EdgeDetectionMode = EdgeDetectionMode.COLOR
  ) => ({
    label: "Edge Detection Mode",
    hint: "The edge detection mode. Default = EdgeDetectionMode.COLOR.",
    options: EdgeDetectionMode,
    value: EdgeDetectionMode.COLOR,
  });

  export const preset = (value: SMAAPreset = SMAAPreset.HIGH) => ({
    label: "Preset",
    hint: "An SMAA quality preset. Default = SMAAPreset.HIGH.",
    options: SMAAPreset,
    value,
  });
}
