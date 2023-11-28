import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Lighting as LightingDemo } from "Components/Lighting/Demo";
import { Lighting as LightingStudio } from "Components/Lighting/Studio";
import { Lighting as LightingThreePoint } from "Components/Lighting/ThreePoint";
import { Lighting as LightingThreePointVolumetric } from "Components/Lighting/ThreePointVolumetric";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const LIGHTING = {
  Demo: <LightingDemo />,
  None: null,
  Studio: <LightingStudio />,
  ThreePoint: <LightingThreePoint />,
  ThreePointVolumetric: <LightingThreePointVolumetric />,
} as const;

/**
 * Lighting.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Lighting = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { lighting } = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      lighting: {
        label: "Lighting",
        options: {
          "None                  ": LIGHTING.None,
          "Demo                  ": LIGHTING.Demo,
          "Studio                ": LIGHTING.Studio,
          "Three Point           ": LIGHTING.ThreePoint,
          "Three Point Volumetric": LIGHTING.ThreePointVolumetric,
        },
        value: LIGHTING.Studio,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  return (
    <group name="Lighting" {...props}>
      {lighting}
    </group>
  );
};

export { Lighting };
