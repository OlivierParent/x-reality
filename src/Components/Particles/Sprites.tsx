import { useTexture } from "@react-three/drei";

import particleImage from "Components/Particles/assets/Arteveldehogeschool_favicon.png";
import { useLeva } from "Hooks/Leva/Particles";

/**
 * Particles with sprites.
 *
 * @returns {React.JSX.Element}
 */
const ParticlesSprites = (): React.JSX.Element => {
  // Leva Controls.
  const { color, detail, opacity, radius, size, sizeAttenuation, transparent } =
    useLeva();

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
