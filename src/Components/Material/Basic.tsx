import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Basic";

/**
 * Basic Material.
 *
 * A material for drawing geometries in a simple shaded (flat or wireframe) way.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial
 *
 * @returns {React.JSX.Element}
 */
const MaterialBasic = (): React.JSX.Element => {
  // Leva Controls.
  const {
    color,
    dithering,
    opacity,
    reflectivity,
    refractionRatio,
    side,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <meshBasicMaterial
      color={color}
      dithering={dithering}
      opacity={opacity}
      reflectivity={reflectivity}
      refractionRatio={refractionRatio}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialBasic as Material };
