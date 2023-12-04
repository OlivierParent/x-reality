import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import {
  ColorRepresentation,
  DirectionalLight,
  DirectionalLightHelper,
} from "three";

import { fromLevaPosition, useLeva } from "Hooks/Leva/Lighting/Studio";

/**
 * Studio Lighting.
 *
 * @returns {React.JSX.Element}
 */
const LightingStudio = (): React.JSX.Element => {
  // Leva Controls.
  const {
    lightHelper, //
    ambientLight,
    frontLight,
    leftLight,
    rightLight,
  } = useLeva();

  // References.
  const frontLightRef = useRef<DirectionalLight>(null!);
  const leftLightRef = useRef<DirectionalLight>(null!);
  const rightLightRef = useRef<DirectionalLight>(null!);

  // Helpers.
  useHelper(
    lightHelper.show ? frontLightRef : null,
    DirectionalLightHelper,
    lightHelper.size * frontLight.intensity,
    frontLight.color as ColorRepresentation
  );
  useHelper(
    lightHelper.show ? leftLightRef : null,
    DirectionalLightHelper,
    lightHelper.size * leftLight.intensity,
    leftLight.color as ColorRepresentation
  );
  useHelper(
    lightHelper.show ? rightLightRef : null,
    DirectionalLightHelper,
    lightHelper.size * rightLight.intensity,
    rightLight.color as ColorRepresentation
  );

  return (
    <group name="Studio Lighting">
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
        name="Ambient Light"
      />
      <directionalLight
        castShadow={frontLight.castShadow}
        color={frontLight.color}
        intensity={frontLight.intensity}
        name="Front Light"
        position={fromLevaPosition(frontLight.position)}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={leftLight.castShadow}
        color={leftLight.color}
        intensity={leftLight.intensity}
        name="Left Light"
        position={fromLevaPosition(leftLight.position)}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={rightLight.castShadow}
        color={rightLight.color}
        intensity={rightLight.intensity}
        name="Right Light"
        position={fromLevaPosition(rightLight.position)}
        ref={rightLightRef}
      />
    </group>
  );
};

export { LightingStudio as Lighting };
