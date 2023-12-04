import { GroupProps } from "@react-three/fiber";

import { Lighting as LightingDemo } from "Components/Lighting/Demo";
import { Lighting as LightingStudio } from "Components/Lighting/Studio";
import { Lighting as LightingThreePoint } from "Components/Lighting/ThreePoint";
import { Lighting as LightingThreePointVolumetric } from "Components/Lighting/ThreePointVolumetric";
import { useLeva } from "Hooks/Leva/Lighting";

const LIGHTING = {
  Demo: <LightingDemo />,
  None: undefined,
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
  const { lighting } = useLeva(LIGHTING);

  return (
    <group name="Lighting" {...props}>
      {lighting}
    </group>
  );
};

export { Lighting };
