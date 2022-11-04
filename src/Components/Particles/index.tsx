import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { ParticlesDefault as Default } from "Components/Particles/Default";
import { ParticlesSprites as Sprites } from "Components/Particles/Sprites";

const PARTICLES = Object.freeze({
  Default: "Default",
  Sprites: "Sprites",
});

const Particles = (props: GroupProps) => {
  const { useParticles } = useControls("Components", {
    useParticles: {
      label: "Particles",
      options: PARTICLES,
      value: PARTICLES.Default,
    },
  });

  function enableParticles(name: string, element: JSX.Element) {
    return useParticles === name ? element : null;
  }

  return (
    <group name="Particles" {...props}>
      {enableParticles(PARTICLES.Default, <Default />)}
      {enableParticles(PARTICLES.Sprites, <Sprites />)}
    </group>
  );
};

export { Particles };
