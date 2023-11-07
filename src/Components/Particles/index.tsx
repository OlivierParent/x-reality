import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Particles as ParticlesDefault } from "Components/Particles/Default";
import { Particles as ParticlesSprites } from "Components/Particles/Sprites";

const PARTICLES = Object.freeze({
  Default: <ParticlesDefault />,
  Sprites: <ParticlesSprites />,
});

const Particles = (props: GroupProps) => {
  const { particles } = useControls("Components", {
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
