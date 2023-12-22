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
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Effects";

const LEVA_OPTIONS = {
  [LEVA_OPTION.NONE]: <></>,
  [LEVA_OPTION.BLOOM]: <Bloom />,
  [LEVA_OPTION.BRIGHTNESS_CONTRAST]: <BrightnessContrast />,
  [LEVA_OPTION.CHROMATIC_ABERRATION]: <ChromaticAberration />,
  [LEVA_OPTION.COLOR_AVERAGE]: <ColorAverage />,
  [LEVA_OPTION.COLOR_DEPTH]: <ColorDepth />,
  [LEVA_OPTION.DEPTH_OF_FIELD]: <DepthOfField />,
  [LEVA_OPTION.DOT_SCREEN]: <DotScreen />,
  [LEVA_OPTION.GLITCH]: <Glitch />,
  [LEVA_OPTION.GRID]: <Grid />,
  [LEVA_OPTION.HUE_SATURATION]: <HueSaturation />,
  [LEVA_OPTION.NOISE]: <Noise />,
  [LEVA_OPTION.PIXELATION]: <Pixelation />,
  [LEVA_OPTION.SMAA]: <SMAA />,
  [LEVA_OPTION.SCANLINE]: <Scanline />,
  [LEVA_OPTION.SEPIA]: <Sepia />,
  [LEVA_OPTION.TONE_MAPPING]: <ToneMapping />,
  [LEVA_OPTION.VIGNETTE]: <Vignette />,
} as const;

/**
 * Effects.
 *
 * @returns {JSX.Element}
 */
const Effects = (): JSX.Element => {
  // Leva Controls.
  const { effect } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS[LEVA_OPTION.NONE]);

  return (
    <group name="Effects">
      <>{effect}</>
    </group>
  );
};

export { Effects };
