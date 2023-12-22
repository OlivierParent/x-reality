import { GroupProps } from "@react-three/fiber";

import { Lighting as LightingDemo } from "Components/Lighting/Demo";
import { Lighting as LightingStudio } from "Components/Lighting/Studio";
import { Lighting as LightingThreePoint } from "Components/Lighting/ThreePoint";
import { Lighting as LightingThreePointVolumetric } from "Components/Lighting/ThreePointVolumetric";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Lighting";

const LEVA_OPTIONS = {
  [LEVA_OPTION.NONE]: undefined,
  [LEVA_OPTION.DEMO]: <LightingDemo />,
  [LEVA_OPTION.STUDIO]: <LightingStudio />,
  [LEVA_OPTION.THREE_POINT]: <LightingThreePoint />,
  [LEVA_OPTION.THREE_POINT_VOLUMETRIC]: <LightingThreePointVolumetric />,
} as const;

/**
 * Lighting.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Lighting = (props: GroupProps): JSX.Element => {
  // Leva Controls.
  const { lighting } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.THREE_POINT_VOLUMETRIC]
  );

  return (
    <group name="Lighting" {...props}>
      {lighting}
    </group>
  );
};

export { Lighting };
