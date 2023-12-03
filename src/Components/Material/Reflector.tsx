import { MeshReflectorMaterial } from "@react-three/drei";

import { useLeva } from "Hooks/Leva/Material/Reflector";

/**
 * Reflector Material.
 *
 * An extension of the MeshStandardMaterial, to easily add reflections and/or blur.
 *
 * @see https://drei.pmnd.rs/?path=/story/shaders-meshreflectormaterial--reflector-st
 *
 * @returns {React.JSX.Element}
 */
const MaterialReflector = (): React.JSX.Element => {
  // Leva Controls.
  const {
    blur,
    color,
    depthScale,
    depthToBlurRatioBias,
    distortion,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    maxDepthThreshold,
    metalness,
    minDepthThreshold,
    mirror,
    mixBlur,
    mixContrast,
    mixStrength,
    opacity,
    reflectorOffset,
    resolution,
    roughness,
    side,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <MeshReflectorMaterial
      blur={blur}
      color={color}
      depthScale={depthScale}
      depthToBlurRatioBias={depthToBlurRatioBias}
      distortion={distortion}
      distortionMap={undefined}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      maxDepthThreshold={maxDepthThreshold}
      metalness={metalness}
      minDepthThreshold={minDepthThreshold}
      mirror={mirror}
      mixBlur={mixBlur}
      mixContrast={mixContrast}
      mixStrength={mixStrength}
      opacity={opacity}
      reflectorOffset={reflectorOffset}
      resolution={resolution}
      roughness={roughness}
      side={side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialReflector as Material };
