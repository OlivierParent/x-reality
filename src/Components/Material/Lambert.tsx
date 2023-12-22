import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Lambert";

/**
 * Lambert Material.
 *
 * A material for non-shiny surfaces, without specular highlights.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial
 *
 * @returns {JSX.Element}
 */
const MaterialLambert = (): JSX.Element => {
  // Leva Controls.
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    opacity,
    side,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <meshLambertMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialLambert as Material };
