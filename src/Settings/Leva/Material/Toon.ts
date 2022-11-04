import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";
import { SettingsLevaMaterialLambert as LambertMaterial } from "Settings/Leva/Material/Lambert";
import { SettingsLevaMaterialPhong as PhongMaterial } from "Settings/Leva/Material/Phong";

/**
 * Mesh Toon Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshToonMaterial
 */
export namespace SettingsLevaMaterialToon {
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

  export const gradientMap = (value: any = null) => ({
    label: "Gradient Map",
    hint: "Gradient map for toon shading. It's required to set Texture.minFilter and Texture.magFilter to THREE.NearestFilter when using this type of texture. Default is null.",
    value,
  });

  export const lightMap = BasicMaterial.lightMap;

  export const lightMapIntensity = BasicMaterial.lightMapIntensity;

  export const map = BasicMaterial.map;

  export const normalMap = PhongMaterial.normalMap;

  export const normalMapType = PhongMaterial.normalMapType;

  export const normalScale = PhongMaterial.normalScale;

  export const wireframe = BasicMaterial.wireframe;
}
