export namespace SettingsLevaLighting {
  export function angle(value: number = 60) {
    return {
      hint: "Maximum extent of the spotlight, in radians, from its direction. Default is 60.",
      label: "Angle",
      max: 180,
      min: 0,
      step: 1,
      value,
    };
  }

  export function castShadow(value: boolean = false) {
    return { label: "Cast Shadow", value };
  }

  export function helpers(value: boolean = false) {
    return { hint: "Show light helpers.", label: "Helpers", value };
  }
  export function helperSize(value: number = 0.5, max: number = 2) {
    return { label: "Helper Size", max, min: 0, value };
  }

  export function distance(value: number = 0) {
    return {
      hint: "Maximum range of the light. Default is 0 (no limit).",
      label: "Distance",
      min: 0,
      step: 0.1,
      value,
    };
  }

  export function intensity(value: number = 1) {
    return {
      hint: "Numeric value of the light's strength. Default is 1.",
      label: "Intensity",
      min: 0,
      value,
    };
  }

  export function penumbra(value: number = 0) {
    return {
      hint: "Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and 1. Default is zero.",
      label: "Penumbra",
      max: 1,
      min: 0,
      value,
    };
  }

  export function target(x: number = 0, y: number = 0, z: number = 0) {
    return { label: "Target", value: { x, y, z } };
  }
}
