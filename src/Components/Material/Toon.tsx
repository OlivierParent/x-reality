import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Toon";

/**
 * Toon Material.
 *
 * A material implementing toon shading.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshToonMaterial
 *
 * @returns {React.JSX.Element}
 */
const MaterialToon = (): React.JSX.Element => {
  const {
    color,
    emissive,
    emissiveIntensity,
    opacity,
    side,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <meshToonMaterial
      color={color}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialToon as Material };
