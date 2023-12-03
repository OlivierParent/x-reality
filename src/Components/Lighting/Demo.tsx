import { useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import {
  ColorRepresentation,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  MathUtils,
  Object3D,
  PointLight,
  PointLightHelper,
  SpotLight,
  SpotLightHelper,
} from "three";

import { fromLevaPosition, useLeva } from "Hooks/Leva/Lighting/Demo";

const INTENSITY_MAX = 20;

const target = new Object3D();

/**
 * Lighting Demo.
 *
 * @returns {React.JSX.Element}
 */
const LightingDemo = (): React.JSX.Element => {
  // Leva Controls.
  const {
    lightHelper,
    ambientLight,
    directionalLight,
    hemisphereLight,
    pointLight,
    spotLight,
  } = useLeva();

  const { scene } = useThree();
  scene.add(target);

  // References.
  const directionalLightRef = useRef<DirectionalLight>(null!);
  const hemisphereLightRef = useRef<HemisphereLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  const spotLightRef = useRef<SpotLight>(null!);

  // Helpers.
  useHelper(
    lightHelper.show ? directionalLightRef : null,
    DirectionalLightHelper,
    lightHelper.size * directionalLight.intensity,
    directionalLight.color as ColorRepresentation
  );
  useHelper(
    lightHelper.show ? hemisphereLightRef : null,
    HemisphereLightHelper,
    lightHelper.size * hemisphereLight.intensity
  );
  useHelper(
    lightHelper.show ? pointLightRef : null,
    PointLightHelper,
    lightHelper.size * (pointLight.intensity / INTENSITY_MAX),
    pointLight.color as ColorRepresentation
  );
  useHelper(
    lightHelper.show ? spotLightRef : null,
    SpotLightHelper,
    spotLight.color as ColorRepresentation
  );

  useEffect(() => {
    target.translateX(spotLight.target.x);
    target.translateY(spotLight.target.y);
    target.translateZ(spotLight.target.z);
  }, [spotLight.target.x, spotLight.target.y, spotLight.target.z]);

  return (
    <group name="Demo Lighting">
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
        name="Ambient Light"
      />
      <directionalLight
        castShadow={directionalLight.castShadow}
        color={directionalLight.color}
        intensity={directionalLight.intensity}
        name="Directional Light"
        position={fromLevaPosition(directionalLight.position)}
        ref={directionalLightRef}
      />
      <hemisphereLight
        castShadow={hemisphereLight.castShadow}
        color={hemisphereLight.color}
        groundColor={hemisphereLight.groundColor}
        intensity={hemisphereLight.intensity}
        name="Hemisphere Light"
        position={fromLevaPosition(hemisphereLight.position)}
        ref={hemisphereLightRef}
      />
      <pointLight
        castShadow={pointLight.castShadow}
        color={pointLight.color}
        distance={pointLight.distance}
        decay={pointLight.decay}
        intensity={pointLight.intensity}
        name="Point Light"
        position={fromLevaPosition(pointLight.position)}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(spotLight.angle)}
        castShadow={spotLight.castShadow}
        color={spotLight.color}
        decay={spotLight.decay}
        distance={spotLight.distance}
        intensity={spotLight.intensity}
        name="Spotlight"
        penumbra={spotLight.penumbra}
        position={fromLevaPosition(spotLight.position)}
        ref={spotLightRef}
        target={target}
      />
    </group>
  );
};

export { LightingDemo as Lighting };
