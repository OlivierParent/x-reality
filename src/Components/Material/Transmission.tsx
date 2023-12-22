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
    color,
    emissive,
    emissiveIntensity,
    opacity,
    side,
    transparent,
    wireframe,
  } = useLeva();

  return (
    <MeshTransmissionMaterial
      color={color}
      distortionScale={0.1}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      side={side as Side}
      temporalDistortion={0.1}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialTransmission as Material };
