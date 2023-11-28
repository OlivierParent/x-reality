import { SettingsLevaEffects as Effects } from "Settings/Leva/Effects";

/**
 * Dot screen effect.
 *
 * @see https://docs.pmnd.rs/react-postprocessing/effects/dot-screen
 * @see https://pmndrs.github.io/postprocessing/public/docs/class/src/effects/DotScreenEffect.js~DotScreenEffect.html
 */
export namespace SettingsLevaEffectsDotScreen {
  export const angle = (value: number = 180) => ({
    label: "Angle (degrees)",
    hint: "The angle of the dot pattern in degrees converted to radians.",
    max: 360,
    min: -360,
    step: 1,
    value,
  });

  export const blendFunction = Effects.blendFunction;

  export const scale = (value: number = 1.0) => ({
    label: "Scale",
    hint: "The scale of the dot pattern.",
    max: 3.0,
    min: 0.0,
    step: 0.1,
    value,
  });
}
