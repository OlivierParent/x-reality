export namespace SettingsLevaLighting {
  export function angle(value: number = 60.0) {
    return {
      hint: "Maximum extent of the spotlight, in degrees (converted to radians), from its direction. Default is `60.0`.",
      label: "Angle (degrees)",
      max: 90.0,
      min: 0.0,
      step: 0.1,
      value,
    };
  }

  export function castShadow(value: boolean = false) {
    return { label: "Cast Shadow", value };
  }

  export function decay(value: number = 2.0) {
    return {
      hint: "The amount the light dims along the distance of the light. Expects a `Float`. Default is `2.0`.",
      label: "Decay",
      min: 0,
      step: 0.1,
      value,
    };
  }

  export function distance(value: number = 0.0) {
    return {
      hint: "Maximum range of the light. Default is `0.0` (no limit).",
      label: "Distance",
      min: 0.0,
      step: 0.1,
      value,
    };
  }

  export function helperShow(value: boolean = false) {
    return { hint: "Show light helpers.", label: "Show", value };
  }

  export function helperSize(value: number = 0.5, max: number = 2) {
    return { hint: "Light helper size.", label: "Size", max, min: 0, value };
  }

  export function intensity(value: number = 1) {
    return {
      hint: "Numeric value of the light's power. Default is `1`.",
      label: "Intensity",
      min: 0,
      value,
    };
  }

  export function penumbra(value: number = 0) {
    return {
      hint: "Percent of the spotlight cone that is attenuated due to penumbra. Takes values between `0` and `1`. Default is `0`.",
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
