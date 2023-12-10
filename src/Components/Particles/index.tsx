import { GroupProps } from "@react-three/fiber";

import { Particles as ParticlesDefault } from "Components/Particles/Default";
import { Particles as ParticlesSprites } from "Components/Particles/Sprites";
import { useLeva } from "Hooks/Leva/Particles";

const PARTICLES = {
  "—Default—": <ParticlesDefault />,
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
  const { particles } = useLeva(PARTICLES);

  return (
    <group name="Particles" {...props}>
      {particles}
    </group>
  );
};

export { Particles };
