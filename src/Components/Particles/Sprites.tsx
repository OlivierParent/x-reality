import { useTexture } from "@react-three/drei";

import particleImage from "Components/Particles/assets/Arteveldehogeschool_favicon.png";
import { useLeva } from "Hooks/Leva/Particles/Points";

/**
 * Particles with sprites.
 *
 * @returns {JSX.Element}
 */
const ParticlesSprites = (): JSX.Element => {
  // Leva Controls.
  const {
    color, //
    detail,
    opacity,
    radius,
    size,
    sizeAttenuation,
    transparent,
  } = useLeva();

  const sprite = useTexture(particleImage);

  return (
    <points>
      <icosahedronGeometry args={[radius, detail]} />
      <pointsMaterial
        color={color}
        map={sprite}
        opacity={opacity}
        size={size}
        sizeAttenuation={sizeAttenuation}
        transparent={transparent}
      />
    </points>
  );
};

export { ParticlesSprites as Particles };
