import { BlendFunction } from "postprocessing";

export namespace SettingsLevaEffects {
  export const blendFunction = (value: BlendFunction = BlendFunction.SRC) => ({
    label: "Blend Function",
    hint: "The blend function of this effect. Default = BlendFunction.SRC.",
    options: BlendFunction,
    value,
  });

  export const intensity = (value: number = 1.0) => ({
    label: "Intensity",
    hint: "The intensity of the effect. Default = 1.",
    max: 9.0,
    min: 0.0,
    step: 0.1,
    value,
  });
}
