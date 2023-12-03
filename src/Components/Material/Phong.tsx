import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Phong";

/**
 * Phong Material.
 *
 * A material for shiny surfaces with specular highlights.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial
 *
 * @returns {React.JSX.Element}
 */
const MaterialPhong = (): React.JSX.Element => {
  // Leva Controls.
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    opacity,
    shininess,
    side,
    specular,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <meshPhongMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      opacity={opacity}
      shininess={shininess}
      side={side as Side}
      specular={specular}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialPhong as Material };
