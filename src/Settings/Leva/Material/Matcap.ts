import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";
import { SettingsLevaMaterialPhong as PhongMaterial } from "Settings/Leva/Material/Phong";

/**
 * Mesh Matcap Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial
 */
export namespace SettingsLevaMaterialMatcap {
  export const alphaMap = BasicMaterial.alphaMap;

  export const bumpMap = PhongMaterial.bumpMap;

  export const bumpScale = PhongMaterial.bumpScale;

  export const color = BasicMaterial.color;

  export const displacementBias = PhongMaterial.displacementBias;

  export const displacementMap = PhongMaterial.displacementMap;

  export const displacementScale = PhongMaterial.displacementScale;

  export const flatShading = PhongMaterial.flatShading;

  export const map = BasicMaterial.map;

  export const matcap = (value: any = null) => ({
    label: "Matcap Map",
    hint: "The matcap map.",
    value,
  });

  export const normalMap = PhongMaterial.normalMap;

  export const normalMapType = PhongMaterial.normalMapType;

  export const normalScale = PhongMaterial.normalScale;
}
