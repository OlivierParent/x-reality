import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
/**
 * Points Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html?q=point#api/en/materials/PointsMaterial
 */
export namespace SettingsLevaMaterialPoints {
  export const color = BasicMaterial.color;

  export const opacity = Material.opacity;

  export const size = (value: number = 1.0) => ({
    label: "Size",
    hint: "Defines the size of the points in pixels. Default = 1.0.",
    max: 2.0,
    min: 0.05,
    step: 0.01,
    value,
  });

  export const sizeAttenuation = (value: boolean = true) => ({
    label: "Size Attenuation",
    hint: "Specify whether points' size is attenuated by the camera depth. (Perspective camera only.) Default is true.",
    value,
  });

  export const transparent = Material.transparent;
}
