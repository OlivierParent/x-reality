import { useLeva } from "Hooks/Leva/Material/PhysicalFrostedGlass";

/**
 * Physically-based Material to simulate frosted glass.
 *
 * @returns {React.JSX.Element}
 */
const MaterialPhysicalFrostedGlass = (): React.JSX.Element => {
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
