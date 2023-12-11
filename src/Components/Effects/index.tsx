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

const LEVA_OPTIONS = {
  "\u2014None\u2014": <></>,
  "Bloom\u0000": <Bloom />,
  "BrightnessContrast\u0000": <BrightnessContrast />,
  "ChromaticAberration\u0000": <ChromaticAberration />,
  "ColorAverage\u0000": <ColorAverage />,
  "ColorDepth\u0000": <ColorDepth />,
  "DepthOfField\u0000": <DepthOfField />,
  "DotScreen\u0000": <DotScreen />,
  "Glitch\u0000": <Glitch />,
  "Grid\u0000": <Grid />,
  "HueSaturation\u0000": <HueSaturation />,
  '"Noise\u0000"': <Noise />,
  "Pixelation\u0000": <Pixelation />,
  "SMAA\u0000": <SMAA />,
  "Scanline\u0000": <Scanline />,
  "Sepia\u0000": <Sepia />,
  "ToneMapping\u0000": <ToneMapping />,
  "Vignette\u0000": <Vignette />,
} as const;

/**
 * Effects.
 *
 * @returns {React.JSX.Element}
 */
const Effects = (): React.JSX.Element => {
  // Leva Controls.
  const { effect } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS["\u2014None\u2014"]);

  return (
    <group name="Effects">
      <>{effect}</>
    </group>
  );
};

export { Effects };
