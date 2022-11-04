import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";
import { SettingsLevaMaterialLambert as LambertMaterial } from "Settings/Leva/Material/Lambert";
import { SettingsLevaMaterialPhong as PhongMaterial } from "Settings/Leva/Material/Phong";

/**
 * Mesh Standard Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial
 */
export namespace SettingsLevaMaterialStandard {
  export const alphaMap = BasicMaterial.alphaMap;

  export const aoMap = BasicMaterial.aoMap;

  export const aoMapIntensity = BasicMaterial.aoMapIntensity;

  export const bumpMap = PhongMaterial.bumpMap;

  export const bumpScale = PhongMaterial.bumpScale;

  export const color = BasicMaterial.color;

  export const displacementBias = PhongMaterial.displacementBias;

  export const displacementMap = PhongMaterial.displacementMap;

  export const displacementScale = PhongMaterial.displacementScale;

  export const emissive = LambertMaterial.emissive;

  export const emissiveIntensity = LambertMaterial.emissiveIntensity;

  export const emissiveMap = LambertMaterial.emissiveMap;

  export const envMap = BasicMaterial.envMap;

  export const envMapIntensity = (value: number = 0.0) => ({
    label: "Environment Map Intensity",
    hint: "Scales the effect of the environment map by multiplying its color.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const flatShading = PhongMaterial.flatShading;

  export const lightMap = BasicMaterial.lightMap;

  export const lightMapIntensity = BasicMaterial.lightMapIntensity;

  export const map = BasicMaterial.map;

  export const metalness = (value: number = 0.0) => ({
    label: "Metalness",
    hint: "How much the material is like a metal. Non-metallic materials such as wood or stone use 0.0, metallic use 1.0, with nothing (usually) in between. Default is 0.0. A value between 0.0 and 1.0 could be used for a rusty metal look. If metalnessMap is also provided, both values are multiplied.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const metalnessMap = (value: any = null) => ({
    label: "Metalness Map",
    hint: "The blue channel of this texture is used to alter the metalness of the material.",
    value,
  });

  export const normalMap = PhongMaterial.normalMap;

  export const normalMapType = PhongMaterial.normalMapType;

  export const normalScale = PhongMaterial.normalScale;

  export const refractionRatio = BasicMaterial.refractionRatio;

  export const roughness = (value: number = 0.0) => ({
    label: "Roughness",
    hint: "How rough the material appears. 0.0 means a smooth mirror reflection, 1.0 means fully diffuse. Default is 1.0. If roughnessMap is also provided, both values are multiplied.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const roughnessMap = (value: any = null) => ({
    label: "Roughness Map",
    hint: "The green channel of this texture is used to alter the roughness of the material.",
    value,
  });

  export const wireframe = BasicMaterial.wireframe;
}
