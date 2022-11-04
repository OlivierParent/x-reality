import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";

/**
 * Mesh Lambert Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial
 */
export namespace SettingsLevaMaterialLambert {
  export const alphaMap = BasicMaterial.alphaMap;

  export const aoMap = BasicMaterial.aoMap;

  export const aoMapIntensity = BasicMaterial.aoMapIntensity;

  export const color = BasicMaterial.color;

  export const combine = BasicMaterial.combine;

  export const emissive = (value: string = "#000000") => ({
    label: "Emissive",
    hint: "Emissive (light) color of the material, essentially a solid color unaffected by other lighting.",
    value,
  });

  export const emissiveIntensity = (value: number = 1) => ({
    label: "Emissive Intensity",
    hint: "Intensity of the emissive light. Modulates the emissive color.",
    max: 5,
    min: 0,
    value,
  });

  export const emissiveMap = (value: any = null) => ({
    label: "Emissive Map",
    hint: "Set emissive (glow) map. The emissive map color is modulated by the emissive color and the emissive intensity. If you have an emissive map, be sure to set the emissive color to something other than black.",
    value,
  });

  export const envMap = BasicMaterial.envMap;

  export const lightMap = BasicMaterial.lightMap;

  export const lightMapIntensity = BasicMaterial.lightMapIntensity;

  export const map = BasicMaterial.map;

  export const reflectivity = BasicMaterial.reflectivity;

  export const refractionRatio = BasicMaterial.refractionRatio;

  export const specularMap = BasicMaterial.specularMap;

  export const wireframe = BasicMaterial.wireframe;
}
