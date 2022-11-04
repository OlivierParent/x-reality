import { ObjectSpaceNormalMap, TangentSpaceNormalMap } from "three";

import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";
import { SettingsLevaMaterialLambert as LambertMaterial } from "Settings/Leva/Material/Lambert";

/**
 * Mesh Phong Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial
 */
export namespace SettingsLevaMaterialPhong {
  export const alphaMap = BasicMaterial.alphaMap;

  export const aoMap = BasicMaterial.aoMap;

  export const aoMapIntensity = BasicMaterial.aoMapIntensity;

  export const bumpMap = (value: any = null) => ({
    label: "Bump Map",
    hint: "The texture to create a bump map. The black and white values map to the perceived depth in relation to the lights. Bump doesn't actually affect the geometry of the object, only the lighting. If a normal map is defined this will be ignored.",
    value,
  });

  export const bumpScale = (value: number = 1.0) => ({
    label: "Bump Scale",
    hint: "How much the bump map affects the material. Typical ranges are 0-1.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const color = BasicMaterial.color;

  export const combine = BasicMaterial.combine;

  export const displacementMap = (value: any = null) => ({
    label: "Displacement Map",
    hint: "The displacement map affects the position of the mesh's vertices. Unlike other maps which only affect the light and shade of the material the displaced vertices can cast shadows, block other objects, and otherwise act as real geometry. The displacement texture is an image where the value of each pixel (white being the highest) is mapped against, and repositions, the vertices of the mesh.",
    value,
  });

  export const displacementBias = (value: number = 1.0) => ({
    label: "Displacement Bias",
    hint: "How much the displacement map affects the mesh (where black is no displacement, and white is maximum displacement). Without a displacement map set, this value is not applied. Default is 1.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const displacementScale = (value: number = 1.0) => ({
    label: "Displacement Scale",
    hint: "How much the displacement map affects the mesh (where black is no displacement, and white is maximum displacement). Without a displacement map set, this value is not applied. Default is 1.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value: 1.0,
  });

  export const emissive = LambertMaterial.emissive;

  export const emissiveIntensity = LambertMaterial.emissiveIntensity;

  export const emissiveMap = LambertMaterial.emissiveMap;

  export const envMap = BasicMaterial.envMap;

  export const flatShading = (value: boolean = false) => ({
    label: "Flat Shading",
    hint: "Define whether the material is rendered with flat shading.",
    value,
  });

  export const lightMap = BasicMaterial.lightMap;

  export const lightMapIntensity = BasicMaterial.lightMapIntensity;

  export const map = BasicMaterial.map;

  export const normalMap = (value: any = null) => ({
    label: "Normal Map",
    hint: "The texture to create a normal map. The RGB values affect the surface normal for each pixel fragment and change the way the color is lit. Normal maps do not change the actual shape of the surface, only the lighting. In case the material has a normal map authored using the left handed convention, the y component of normalScale should be negated to compensate for the different handedness.",
    value,
  });

  export const normalMapType = () => ({
    label: "Normal Map Type",
    hint: "The type of normal map.",
    options: { ObjectSpaceNormalMap, TangentSpaceNormalMap },
    value: TangentSpaceNormalMap,
  });

  export const normalScale = () => ({
    label: "Normal Scale",
    hint: "How much the normal map affects the material. Typical ranges are 0-1. Default is a Vector2 set to (1,1).",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value: { x: 1.0, y: 1.0 },
  });

  export const reflectivity = BasicMaterial.reflectivity;

  export const refractionRatio = BasicMaterial.refractionRatio;

  export const shininess = (value: number = 30.0) => ({
    label: "Shininess",
    hint: "How shiny the .specular highlight is; a higher value gives a sharper highlight.",
    max: 100.0,
    min: 0.0,
    step: 0.1,
    value,
  });

  export const specular = (value: string = "#111111") => ({
    label: "Specular",
    hint: "Specular color of the material. Default is a Color set to 0x111111 (very dark grey).",
    value,
  });

  export const specularMap = BasicMaterial.specularMap;

  export const wireframe = BasicMaterial.wireframe;
}
