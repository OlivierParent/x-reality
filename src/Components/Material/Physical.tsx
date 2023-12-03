import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Physical";

/**
 * Physically-based Material.
 *
 * An extension of the MeshStandardMaterial, providing more advanced physically-based rendering properties.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial
 *
 * @returns {React.JSX.Element}
 */
const MaterialPhysical = (): React.JSX.Element => {
  // Leva Controls.
  const {
    clearcoat,
    clearcoatRoughness,
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    ior,
    metalness,
    opacity,
    reflectivity,
    roughness,
    sheen,
    sheenColor,
    sheenRoughness,
    side,
    thickness,
    transmission,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <meshPhysicalMaterial
      clearcoat={clearcoat}
      clearcoatRoughness={clearcoatRoughness}
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      ior={ior}
      metalness={metalness}
      opacity={opacity}
      reflectivity={reflectivity}
      roughness={roughness}
      sheen={sheen}
      sheenColor={sheenColor}
      sheenRoughness={sheenRoughness}
      side={side as Side}
      thickness={thickness}
      transmission={transmission}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialPhysical as Material };
