import { BackSide, DoubleSide, FrontSide, Side } from "three";

/**
 * Abstract Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/Material
 */
export namespace SettingsLevaMaterial {
  export const dithering = (value: boolean = false) => ({
    label: "Dithering",
    hint: "Whether to apply dithering to the color to remove the appearance of banding.",
    value,
  });

  export const opacity = (value: number = 1.0) => ({
    label: "Opacity",
    hint: "Float in the range of 0.0 - 1.0 indicating how transparent the material is. A value of 0.0 indicates fully transparent, 1.0 is fully opaque.\nIf the material's transparent property is not set to true, the material will remain fully opaque and this value will only affect its color.",
    max: 1.0,
    min: 0.0,
    step: 0.01,
    value,
  });

  export const side = (value: Side = FrontSide) => ({
    label: "Normals",
    hint: "Defines which side of faces will be rendered - front, back or both.",
    options: { BackSide, DoubleSide, FrontSide },
    value,
  });

  export const transparent = (value: boolean = false) => ({
    label: "Transparent",
    hint: "Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects.\nWhen set to true, the extent to which the material is transparent is controlled by setting its opacity property.",
    value,
  });
}
