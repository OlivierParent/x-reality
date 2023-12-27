import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";
import { SettingsLevaMaterialLambert as LambertMaterial } from "Settings/Leva/Material/Lambert";
import { SettingsLevaMaterialPhong as PhongMaterial } from "Settings/Leva/Material/Phong";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";
import { SettingsLevaMaterialPhysical as PhysicalMaterial } from "Settings/Leva/Material/Physical";

/**
 * Mesh Transmission Material (Drei) settings for Leva.
 *
 * @see https://drei.pmnd.rs/?path=/docs/shaders-meshtransmissionmaterial--docs
 */
export namespace SettingsLevaMaterialTransmission {
  export const alphaMap = BasicMaterial.alphaMap;

  export const anisotropicBlur = (value: number = 0.1) => ({
    label: "Anisotropic Blur",
    hint: "",
    min: 0,
    step: 0.1,
    value,
  });

  export const anisotropy = (value: number = 0) => ({
    label: "Anisotropy",
    hint: "",
    min: 0,
    step: 0.01,
    value,
  });

  export const aoMap = BasicMaterial.aoMap;

  export const aoMapIntensity = BasicMaterial.aoMapIntensity;

  export const bumpMap = PhongMaterial.bumpMap;

  export const bumpScale = PhongMaterial.bumpScale;

  export const chromaticAberration = (value: number = 0.03) => ({
    label: "Chromatic Aberration",
    hint: "Chromatic aberration, default = `0.03`.",
    min: 0,
    step: 0.01,
    value,
  });

  export const color = BasicMaterial.color;

  export const displacementBias = PhongMaterial.displacementBias;

  export const displacementMap = PhongMaterial.displacementMap;

  export const displacementScale = PhongMaterial.displacementScale;

  export const distortion = (value: number = 0) => ({
    label: "Distortion",
    hint: "Distortion, default: `0`.",
    min: 0,
    step: 0.01,
    value,
  });

  export const distortionScale = (value: number = 0.5) => ({
    label: "Distortion Scale",
    hint: "Distortion scale, default = `0.5`.",
    min: 0.0,
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
    hint: "Upper edge for the depthTexture interpolation. Default = `0`.",
    min: 0,
    step: 0.01,
    value,
  });

  export const map = BasicMaterial.map;

  export const metalness = StandardMaterial.metalness;

  export const metalnessMap = StandardMaterial.metalnessMap;

  export const normalMap = PhongMaterial.normalMap;

  export const normalMapType = PhongMaterial.normalMapType;

  export const normalScale = PhongMaterial.normalScale;

  export const refractionRatio = BasicMaterial.refractionRatio;

  export const resolution = (value: number = 0) => ({
    label: "Resolution",
    hint: "Resolution of the local buffer, default = undefined (fullscreen).",
    min: 0,
    step: 256,
    value,
  });

  export const roughness = StandardMaterial.roughness;

  export const roughnessMap = StandardMaterial.roughnessMap;

  export const samples = (value: number = 10) => ({
    label: "Samples",
    hint: "",
    min: 0,
    step: 1,
    value,
  });

  export const temporalDistortion = (value: number = 0.0) => ({
    label: "Temporal Distortion",
    hint: "Temporal distortion (speed of movement), default = `0.0`.",
    min: 0.0,
    step: 0.01,
    value,
  });

  export const thickness = PhysicalMaterial.thickness;

  export const transmission = PhysicalMaterial.transmission;

  export const wireframe = BasicMaterial.wireframe;
}
