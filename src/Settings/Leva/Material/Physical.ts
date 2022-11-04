/**
 * Mesh Physical Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial
 */
export namespace SettingsLevaMaterialPhysical {
  export const clearcoat = (value: number = 0.0) => ({
    label: "Clearcoat",
    hint: "Represents the intensity of the clear coat layer, from 0.0 to 1.0. Use clear coat related properties to enable multilayer materials that have a thin translucent layer over the base layer.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const clearcoatMap = (value: any = null) => ({
    label: "Clearcoat Map",
    hint: "The red channel of this texture is multiplied against .clearcoat, for per-pixel control over a coating's intensity.",
    value,
  });

  export const clearcoatNormalMap = (value: any = null) => ({
    label: "Clearcoat Normal Map",
    hint: "Can be used to enable independent normals for the clear coat layer.",
    value,
  });

  export const clearcoatNormalScale = () => ({
    label: "Clearcoat Normal Scale",
    hint: "How much .clearcoatNormalMap affects the clear coat layer, from (0,0) to (1,1). Default is (1,1).",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value: [1.0, 1.0],
  });

  export const clearcoatRoughness = (value: number = 0.0) => ({
    label: "Clearcoat Roughness",
    hint: "Roughness of the clear coat layer, from 0.0 to 1.0.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const ior = (value: number = 1.5) => ({
    label: "Index-of-Refraction",
    hint: "Index-of-refraction for non-metallic materials, from 1.0 to 2.333. Default is 1.5.",
    max: 2.333,
    min: 1.0,
    step: 0.001,
    value,
  });

  export const reflectivity = (value: number = 0.5) => ({
    label: "Reflectivity",
    hint: "Degree of reflectivity, from 0.0 to 1.0. Default is 0.5, which corresponds to an index-of-refraction of 1.5.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const sheen = (value: number = 0.0) => ({
    label: "Sheen",
    hint: "The intensity of the sheen layer, from 0.0 to 1.0. Default is 0.0.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const sheenColor = (value: string = "#ffffff") => ({
    label: "Sheen Color",
    hint: "The sheen tint. Default is 0xffffff, white.",
    value,
  });

  export const sheenColorMap = (value: any = null) => ({
    label: "Sheen Color Map",
    hint: "The RGB channels of this texture are multiplied against .sheenColor, for per-pixel control over sheen tint.",
    value,
  });
  export const sheenRoughness = (value: number = 1.0) => ({
    label: "Sheen Roughness",
    hint: "Roughness of the sheen layer, from 0.0 to 1.0. Default is 1.0.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const sheenRoughnessMap = (value: any = null) => ({
    label: "Sheen Roughness Map",
    hint: "The alpha channel of this texture is multiplied against .sheenRoughness, for per-pixel control over sheen roughness.",
    value,
  });

  export const thickness = (value: number = 0.01) => ({
    label: "Thickness",
    max: 9.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const transmission = (value: number = 0.0) => ({
    label: "Transmission",
    hint: "Degree of transmission (or optical transparency), from 0.0 to 1.0. Default is 0.0.\nThin, transparent or semitransparent, plastic or glass materials remain largely reflective even if they are fully transmissive. The transmission property can be used to model these materials.\nWhen transmission is non-zero, opacity should be set to 1.",
    max: 2.0,
    min: 0.0,
    step: 0.01,
    value,
  });
}
