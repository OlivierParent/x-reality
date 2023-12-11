import { GroupProps } from "@react-three/fiber";

import { Lighting as LightingDemo } from "Components/Lighting/Demo";
import { Lighting as LightingStudio } from "Components/Lighting/Studio";
import { Lighting as LightingThreePoint } from "Components/Lighting/ThreePoint";
import { Lighting as LightingThreePointVolumetric } from "Components/Lighting/ThreePointVolumetric";
import { useLeva } from "Hooks/Leva/Lighting";

const LEVA_OPTIONS = {
  "\u2014None\u2014": undefined,
  "Demo\u0000": <LightingDemo />,
  "Studio\u0000": <LightingStudio />,
  "Three Point": <LightingThreePoint />,
  "Three Point Volumetric": <LightingThreePointVolumetric />,
} as const;

/**
 * Lighting.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Lighting = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { lighting } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS["Three Point Volumetric"]
  );

  return (
    <group name="Lighting" {...props}>
      {lighting}
    </group>
  );
};

export { Lighting };
