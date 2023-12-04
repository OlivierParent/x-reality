import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";
import { SettingsLevaMaterialLambert as LambertMaterial } from "Settings/Leva/Material/Lambert";
import { SettingsLevaMaterialPhong as PhongMaterial } from "Settings/Leva/Material/Phong";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";

/**
 * Mesh Reflector Material (Drei) settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial
 */
export namespace SettingsLevaMaterialReflector {
  export const alphaMap = BasicMaterial.alphaMap;

  export const aoMap = BasicMaterial.aoMap;

  export const aoMapIntensity = BasicMaterial.aoMapIntensity;

  export const blur = (value: [number, number] = [0, 0]) => ({
    label: "Blur",
    hint: "Blur ground reflections (width, height), 0 skips blur.",
    joystick: false,
    step: 1,
    value,
  });

  export const bumpMap = PhongMaterial.bumpMap;

  export const bumpScale = PhongMaterial.bumpScale;

  export const color = BasicMaterial.color;

  export const depthScale = (value: number = 0) => ({
    label: "Depth Factor Scale",
    hint: "Scale the depth factor. Default is `0` (no depth).",
    min: 0,
    step: 0.01,
    value,
  });

  export const depthToBlurRatioBias = (value: number = 0.25) => ({
    label: "Depth to Blur Ratio Bias",
    hint: "Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. Default is `0.25` and must be between `0` and `1`. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture.",
    max: 1,
    min: 0,
    step: 0.01,
    value,
  });

  export const displacementBias = PhongMaterial.displacementBias;

  export const displacementMap = PhongMaterial.displacementMap;

  export const displacementScale = PhongMaterial.displacementScale;

  export const distortion = (value: number = 1) => ({
    label: "Distortion",
    hint: "Amount of distortion based on the distortionMap texture.",
    min: 0,
    step: 0.01,
    value,
  });

  export const emissive = LambertMaterial.emissive;

  export const emissiveIntensity = LambertMaterial.emissiveIntensity;

  export const emissiveMap = LambertMaterial.emissiveMap;

  export const envMap = BasicMaterial.envMap;

  export const envMapIntensity = StandardMaterial.envMapIntensity;

  export const flatShading = PhongMaterial.flatShading;

  export const lightMap = BasicMaterial.lightMap;

  export const lightMapIntensity = BasicMaterial.lightMapIntensity;

  export const maxDepthThreshold = (value: number = 0) => ({
    label: "Max Depth Threshold",
    hint: "Upper edge for the depthTexture interpolation. Default = 0.",
    min: 0,
    step: 0.01,
    value,
  });

  export const map = BasicMaterial.map;

  export const metalness = StandardMaterial.metalness;

  export const metalnessMap = StandardMaterial.metalnessMap;

  export const minDepthThreshold = (value: number = 0) => ({
    label: "Min Depth Threshold",
    hint: "Lower edge for the depthTexture interpolation. Default = 0.",
    min: 0,
    step: 0.01,
    value,
  });

  export const mirror = (value: number = 0.75) => ({
    label: "Mirror",
    hint: "Mirror environment: 0 = texture colors, 1 = pick up environment colors.",
    max: 1,
    min: 0,
    step: 0.01,
    value,
  });

  export const mixBlur = (value: number = 1.0) => ({
    label: "Mix Blur",
    hint: "How much blur mixes with surface roughness. Default = 1.",
    min: 0,
    step: 0.01,
    value,
  });
  export const mixContrast = (value: number = 1.0) => ({
    label: "Mix Contrast",
    hint: "Contrast of the reflections.",
    min: 0,
    step: 0.01,
    value,
  });

  export const mixStrength = (value: number = 0.5) => ({
    label: "Mix Strength",
    hint: "Strength of the reflections.",
    min: 0,
    step: 0.01,
    value,
  });

  export const normalMap = PhongMaterial.normalMap;

  export const normalMapType = PhongMaterial.normalMapType;

  export const normalScale = PhongMaterial.normalScale;

  export const reflectorOffset = (value: number = 0) => ({
    label: "Reflector Offset",
    hint: "Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin. Default = 0.",
    min: 0,
    step: 0.01,
    value,
  });

  export const refractionRatio = BasicMaterial.refractionRatio;

  export const resolution = (value: number = 0) => ({
    label: "Resolution",
    hint: "Off-buffer resolution: lower = faster, higher = better quality, slower.",
    max: 8192,
    min: 0,
    step: 256,
    value,
  });

  export const roughness = StandardMaterial.roughness;

  export const roughnessMap = StandardMaterial.roughnessMap;

  export const wireframe = BasicMaterial.wireframe;
}
