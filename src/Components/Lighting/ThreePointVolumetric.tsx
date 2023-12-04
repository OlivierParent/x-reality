import { SpotLight, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import {
  ColorRepresentation,
  MathUtils,
  Object3D,
  SpotLightHelper,
  SpotLight as ThreeSpotLight,
} from "three";

import { fromLevaPosition, useLeva } from "Hooks/Leva/Lighting/ThreePoint";

const backLightTarget = new Object3D();
const fillLightTarget = new Object3D();
const keyLightTarget = new Object3D();

/**
 * Three Point Lighting with volumetric spotlights.
 *
 * @returns {React.JSX.Element}
 */
const LightingThreePointVolumetric = (): React.JSX.Element => {
  // Leva Controls.
  const {
    lightHelper, //
    ambientLight,
    backLight,
    fillLight,
    keyLight,
  } = useLeva();

  // References.
  const backLightRef = useRef<ThreeSpotLight>(null!);
  const fillLightRef = useRef<ThreeSpotLight>(null!);
  const keyLightRef = useRef<ThreeSpotLight>(null!);

  // Helpers.
  useHelper(
    lightHelper.show ? backLightRef : null,
    SpotLightHelper,
    backLight.color as ColorRepresentation
  );
  useHelper(
    lightHelper.show ? fillLightRef : null,
    SpotLightHelper,
    fillLight.color as ColorRepresentation
  );
  useHelper(
    lightHelper.show ? keyLightRef : null,
    SpotLightHelper,
    keyLight.color as ColorRepresentation
  );

  useEffect(() => {
    backLightTarget.translateX(backLight.target.x);
    backLightTarget.translateY(backLight.target.y);
    backLightTarget.translateZ(backLight.target.z);
  }, [backLight.target.x, backLight.target.y, backLight.target.z]);

  useEffect(() => {
    fillLightTarget.translateX(fillLight.target.x);
    fillLightTarget.translateY(fillLight.target.y);
    fillLightTarget.translateZ(fillLight.target.z);
  }, [fillLight.target.x, fillLight.target.y, fillLight.target.z]);

  useEffect(() => {
    keyLightTarget.translateX(keyLight.target.x);
    keyLightTarget.translateY(keyLight.target.y);
    keyLightTarget.translateZ(keyLight.target.z);
  }, [keyLight.target.x, keyLight.target.y, keyLight.target.z]);

  return (
    <group name="Three Point Lighting Volumetric">
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
        name="Ambient Light"
      />
      <SpotLight
        angle={MathUtils.degToRad(backLight.angle)}
        castShadow={backLight.castShadow}
        color={backLight.color}
        decay={backLight.decay}
        distance={backLight.distance}
        intensity={backLight.intensity}
        name="Back Light"
        penumbra={backLight.penumbra}
        position={fromLevaPosition(backLight.position)}
        ref={backLightRef}
        target={backLightTarget}
      />
      <SpotLight
        angle={MathUtils.degToRad(fillLight.angle)}
        castShadow={fillLight.castShadow}
        color={fillLight.color}
        decay={fillLight.decay}
        distance={fillLight.distance}
        intensity={fillLight.intensity}
        name="Fill Light"
        penumbra={fillLight.penumbra}
        position={fromLevaPosition(fillLight.position)}
        ref={fillLightRef}
        target={fillLightTarget}
      />
      <SpotLight
        angle={MathUtils.degToRad(keyLight.angle)}
        castShadow={keyLight.castShadow}
        color={keyLight.color}
        decay={keyLight.decay}
        distance={keyLight.distance}
        intensity={keyLight.intensity}
        name="Key Light"
        penumbra={keyLight.penumbra}
        position={fromLevaPosition(keyLight.position)}
        ref={keyLightRef}
        target={keyLightTarget}
      />
    </group>
  );
};

export { LightingThreePointVolumetric as Lighting };
