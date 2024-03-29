import { useLeva } from "Hooks/Leva/Particles/Points";

/**
 * Particles.
 *
 * @returns {JSX.Element}
 */
const ParticlesDefault = (): JSX.Element => {
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

  return (
    <points>
      <icosahedronGeometry args={[radius, detail]} />
      <pointsMaterial
        color={color}
        opacity={opacity}
        size={size}
        sizeAttenuation={sizeAttenuation}
        transparent={transparent}
      />
    </points>
  );
};

export { ParticlesDefault as Particles };
