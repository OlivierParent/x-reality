import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  BLOOM = "Bloom",
  BRIGHTNESS_CONTRAST = "BrightnessContrast",
  CHROMATIC_ABERRATION = "ChromaticAberration",
  COLOR_AVERAGE = "ColorAverage",
  COLOR_DEPTH = "ColorDepth",
  DEPTH_OF_FIELD = "DepthOfField",
  DOT_SCREEN = "DotScreen",
  GLITCH = "Glitch",
  GRID = "Grid",
  HUE_SATURATION = "HueSaturation",
  NOISE = "Noise",
  NONE = "\u2014None\u2014",
  PIXELATION = "Pixelation",
  SCANLINE = "Scanline",
  SEPIA = "Sepia",
  SMAA = "SMAA",
  TONE_MAPPING = "ToneMapping",
  VIGNETTE = "Vignette",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { effect } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          effect: {
            label: "Effect",
            options,
            value,
          },
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    effect,
  };
}

export { LEVA_OPTION, useLeva };
