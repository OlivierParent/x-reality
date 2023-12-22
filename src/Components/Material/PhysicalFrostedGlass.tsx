import { useLeva } from "Hooks/Leva/Material/PhysicalFrostedGlass";

/**
 * Physically-based Material to simulate frosted glass.
 *
 * @returns {JSX.Element}
 */
const MaterialPhysicalFrostedGlass = (): JSX.Element => {
  // Leva Controls.
  const { roughness, thickness, transmission } = useLeva();

  return (
    <meshPhysicalMaterial
      roughness={roughness}
      thickness={thickness}
      transmission={transmission}
    />
  );
};

export { MaterialPhysicalFrostedGlass as Material };
