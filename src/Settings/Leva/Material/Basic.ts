import { Combine, MultiplyOperation, AddOperation, MixOperation } from "three";

/**
 * Mesh Basic Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial
 */
export namespace SettingsLevaMaterialBasic {
  export const alphaMap = (value: any = null) => ({
    label: "Alpha Map",
    hint: "The alpha map is a grayscale texture that controls the opacity across the surface (black: fully transparent; white: fully opaque).",
    value,
  });

  export const aoMap = (value: any = null) => ({
    label: "Ambient Occlusion Map",
    hint: "The red channel of this texture is used as the ambient occlusion map. The aoMap requires a second set of UVs.",
    value,
  });

  export const aoMapIntensity = (value: number = 1.0) => ({
    label: "Ambient Occlusion Map Intensity",
    hint: "Intensity of the ambient occlusion effect. Zero is no occlusion effect.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const color = (value: string = "#ffffff") => ({
    label: "Color",
    hint: "Color of the material.",
    value,
  });

  export const combine = (value: Combine = MultiplyOperation) => ({
    label: "Color",
    hint: "How to combine the result of the surface's color with the environment map, if any.",
    options: [AddOperation, MixOperation, MultiplyOperation],
    value,
  });

  export const envMap = (value: any = null) => ({
    label: "Environment Map",
    hint: "The environment map.",
    value,
  });

  export const lightMap = (value: any = null) => ({
    label: "Light Map",
    hint: "The light map. The lightMap requires a second set of UVs.",
    value,
  });

  export const lightMapIntensity = (value: number = 1.0) => ({
    label: "Light Map Intensity",
    hint: "Intensity of the baked light.",
    value,
  });

  export const map = (value: any = null) => ({
    label: "Map",
    hint: "The color map.",
    value,
  });

  export const reflectivity = (value: number = 1.0) => ({
    label: "Reflectivity",
    hint: "How much the environment map affects the surface; also see .combine. The default value is 1 and the valid range is between 0 (no reflections) and 1 (full reflections).",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const refractionRatio = (value: number = 0.98) => ({
    label: "Refraction Ratio",
    hint: "The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material. It is used with environment mapping modes THREE.CubeRefractionMapping and THREE.EquirectangularRefractionMapping. The refraction ratio should not exceed 1.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const specularMap = (value: any = null) => ({
    label: "Specular Map",
    hint: "Specular map used by the material.",
    value,
  });

  export const wireframe = (value: boolean = false) => ({
    label: "Wireframe",
    hint: "Render geometry as wireframe. Default is false (i.e. render as flat polygons).",
    value,
  });
}
