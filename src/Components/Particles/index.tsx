import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Particles as ParticlesDefault } from "Components/Particles/Default";
import { Particles as ParticlesSprites } from "Components/Particles/Sprites";
import { LEVA } from "Configs/leva";

const PARTICLES = {
  Default: <ParticlesDefault />,
  Sprites: <ParticlesSprites />,
} as const;

/**
 * Particles.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Particles = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { particles } = useControls(LEVA.SCHEMA.COMPONENTS, {
    particles: {
      label: "Particles",
      options: PARTICLES,
      value: PARTICLES.Default,
    },
  });

  return (
    <group name="Particles" {...props}>
      {particles}
    </group>
  );
};

export { Particles };
