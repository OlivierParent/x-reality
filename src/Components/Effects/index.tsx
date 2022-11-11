import { folder, useControls } from "leva";

import { Bloom } from "Components/Effects/Bloom";
import { BrightnessContrast } from "Components/Effects/BrightnessContrast";
import { ChromaticAberration } from "Components/Effects/ChromaticAberration";
import { ColorAverage } from "Components/Effects/ColorAverage";
import { ColorDepth } from "Components/Effects/ColorDepth";
import { DepthOfField } from "Components/Effects/DepthOfField";
import { DotScreen } from "Components/Effects/DotScreen";
import { Glitch } from "Components/Effects/Glitch";
import { Grid } from "Components/Effects/Grid";
import { HueSaturation } from "Components/Effects/HueSaturation";
import { Noise } from "Components/Effects/Noise";
import { Pixelation } from "Components/Effects/Pixelation";
import { Scanline } from "Components/Effects/Scanline";
import { Sepia } from "Components/Effects/Sepia";
import { SMAA } from "Components/Effects/SMAA";
import { ToneMapping } from "Components/Effects/ToneMapping";
import { Vignette } from "Components/Effects/Vignette";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";

const EFFECT = Object.freeze({
  None: "None",
  Bloom: "Bloom",
  BrightnessContrast: "BrightnessContrast",
  ChromaticAberration: "ChromaticAberration",
  ColorAverage: "ColorAverage",
  ColorDepth: "ColorDepth",
  DepthOfField: "DepthOfField",
  DotScreen: "DotScreen",
  Glitch: "Glitch",
  Grid: "Grid",
  HueSaturation: "HueSaturation",
  Noise: "Noise",
  Pixelation: "Pixelation",
  SMAA: "SMAA",
  Scanline: "Scanline",
  Sepia: "Sepia",
  ToneMapping: "ToneMapping",
  Vignette: "Vignette",
});

const Effects = () => {
  const { useEffect } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          useEffect: {
            label: "Effect",
            options: EFFECT,
            value: EFFECT.None,
          },
        },
        Settings.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  function enableEffect(name: string, element: JSX.Element) {
    return useEffect === name ? element : null;
  }

  return (
    <group name="Effects">
      {enableEffect(EFFECT.Bloom, <Bloom />)}
      {enableEffect(EFFECT.BrightnessContrast, <BrightnessContrast />)}
      {enableEffect(EFFECT.ChromaticAberration, <ChromaticAberration />)}
      {enableEffect(EFFECT.ColorAverage, <ColorAverage />)}
      {enableEffect(EFFECT.ColorDepth, <ColorDepth />)}
      {enableEffect(EFFECT.DepthOfField, <DepthOfField />)}
      {enableEffect(EFFECT.DotScreen, <DotScreen />)}
      {enableEffect(EFFECT.Glitch, <Glitch />)}
      {enableEffect(EFFECT.Grid, <Grid />)}
      {enableEffect(EFFECT.HueSaturation, <HueSaturation />)}
      {enableEffect(EFFECT.Noise, <Noise />)}
      {enableEffect(EFFECT.Pixelation, <Pixelation />)}
      {enableEffect(EFFECT.SMAA, <SMAA />)}
      {enableEffect(EFFECT.Scanline, <Scanline />)}
      {enableEffect(EFFECT.Sepia, <Sepia />)}
      {enableEffect(EFFECT.ToneMapping, <ToneMapping />)}
      {enableEffect(EFFECT.Vignette, <Vignette />)}
    </group>
  );
};

export { Effects };
