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
import { SMAA } from "Components/Effects/SMAA";
import { Scanline } from "Components/Effects/Scanline";
import { Sepia } from "Components/Effects/Sepia";
import { ToneMapping } from "Components/Effects/ToneMapping";
import { Vignette } from "Components/Effects/Vignette";
import { useLeva } from "Hooks/Leva/Effects";

const EFFECT = {
  "—None—": undefined,
  Bloom: <Bloom />,
  BrightnessContrast: <BrightnessContrast />,
  ChromaticAberration: <ChromaticAberration />,
  ColorAverage: <ColorAverage />,
  ColorDepth: <ColorDepth />,
  DepthOfField: <DepthOfField />,
  DotScreen: <DotScreen />,
  Glitch: <Glitch />,
  Grid: <Grid />,
  HueSaturation: <HueSaturation />,
  Noise: <Noise />,
  Pixelation: <Pixelation />,
  SMAA: <SMAA />,
  Scanline: <Scanline />,
  Sepia: <Sepia />,
  ToneMapping: <ToneMapping />,
  Vignette: <Vignette />,
} as const;

/**
 *
 * @returns {React.JSX.Element}
 */
const Effects = (): React.JSX.Element => {
  // Leva Controls.
  const { effect } = useLeva(EFFECT);

  return (
    <group name="Effects">
      <>{effect}</>
    </group>
  );
};

export { Effects };
