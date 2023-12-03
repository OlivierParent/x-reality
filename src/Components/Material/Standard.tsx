import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Standard";

/**
 * Standard Material.
 *
 * A standard physically based material, using Metallic-Roughness workflow.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial
 *
 * @returns {React.JSX.Element}
 */
const MaterialStandard = (): React.JSX.Element => {
  // Leva Controls.
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    metalness,
    opacity,
    roughness,
    side,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <meshStandardMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      metalness={metalness}
      opacity={opacity}
      roughness={roughness}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialStandard as Material };
