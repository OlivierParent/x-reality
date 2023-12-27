import { MeshTransmissionMaterial } from "@react-three/drei";
import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Transmission";

/**
 * Transmission Material.
 *
 *  An extension of the MeshPhysicalMaterial.
 *
 * @see https://drei.pmnd.rs/?path=/docs/shaders-meshtransmissionmaterial--docs
 *
 * @returns {JSX.Element}
 */
const MaterialTransmission = (): JSX.Element => {
  const {
    anisotropicBlur,
    anisotropy,
    chromaticAberration,
    color,
    distortion,
    distortionScale,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    metalness,
    opacity,
    resolution,
    roughness,
    samples,
    side,
    temporalDistortion,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <MeshTransmissionMaterial
      anisotropicBlur={anisotropicBlur}
      anisotropy={anisotropy}
      chromaticAberration={chromaticAberration}
      color={color}
      distortion={distortion}
      distortionScale={distortionScale}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      flatShading={flatShading}
      metalness={metalness}
      opacity={opacity}
      resolution={resolution}
      roughness={roughness}
      samples={samples}
      side={side as Side}
      temporalDistortion={temporalDistortion}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialTransmission as Material };
