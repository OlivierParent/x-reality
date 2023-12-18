import { GroupProps } from "@react-three/fiber";

import { Particles as ParticlesDefault } from "Components/Particles/Default";
import { Particles as ParticlesSprites } from "Components/Particles/Sprites";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Particles";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DEFAULT]: <ParticlesDefault />,
  [LEVA_OPTION.SPRITES]: <ParticlesSprites />,
} as const;

/**
 * Particles.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Particles = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { particles } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.DEFAULT]
  );

  return (
    <group name="Particles" {...props}>
      {particles}
    </group>
  );
};

export { Particles };
