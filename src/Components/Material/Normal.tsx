import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Normal";

/**
 * Normal Material.
 *
 * A material that maps the normal vectors to RGB colors.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshNormalMaterial
 *
 * @returns {JSX.Element}
 */
const MaterialNormal = (): JSX.Element => {
  // Leva Controls.
  const { dithering, flatShading, opacity, side, transparent, wireframe } =
    useLeva();

  return (
    <meshNormalMaterial
      dithering={dithering}
      flatShading={flatShading}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialNormal as Material };
