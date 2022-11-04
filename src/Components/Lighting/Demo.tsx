import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useRef } from "react";
import {
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

import { LEVA } from "Configs/leva";
import { SettingsLevaColor } from "Settings/Leva/Color";
import { SettingsLevaLighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition } from "Settings/Leva/Position";

const intensityMax = 20;

const LightingDemo = (): JSX.Element => {
  const { helpers, helperSize } = useControls(LEVA.SCHEMA.LIGHTING, {
    helpers: SettingsLevaLighting.helpers(),
    helperSize: SettingsLevaLighting.helperSize(),
  });
  const ambientLight = useControls(LEVA.SCHEMA.LIGHTING, {
    "Ambient Light": folder({
      color: SettingsLevaColor.color(),
      intensity: SettingsLevaLighting.intensity(0.1, 1),
    }),
  });
  const directionalLight = useControls(LEVA.SCHEMA.LIGHTING, {
    "Directional Light": folder({
      castShadow: SettingsLevaLighting.castShadow(true),
      color: SettingsLevaColor.color("hsl(120, 100%, 70%)"),
      intensity: SettingsLevaLighting.intensity(1, 1),
      position: SettingsLevaPosition.position(4, 4, 1),
    }),
  });
  const hemisphereLight = useControls(LEVA.SCHEMA.LIGHTING, {
    "Hemisphere Light": folder({
      castShadow: SettingsLevaLighting.castShadow(true),
      color: SettingsLevaColor.color("hsl(210, 100%, 70%)", "Sky"),
      groundColor: SettingsLevaColor.color("hsl(30, 100%, 70%)", "Ground"),
      intensity: SettingsLevaLighting.intensity(1, 1),
      position: SettingsLevaPosition.position(0, 1, 0),
    }),
  });
  const pointLight = useControls(LEVA.SCHEMA.LIGHTING, {
    "Point Light": folder({
      castShadow: SettingsLevaLighting.castShadow(true),
      color: SettingsLevaColor.color("hsl(240, 100%, 70%)"),
      intensity: SettingsLevaLighting.intensity(0.5, 20),
      position: SettingsLevaPosition.position(-4, 1, 4),
    }),
  });
  const spotLight = useControls(LEVA.SCHEMA.LIGHTING, {
    Spotlight: folder({
      castShadow: SettingsLevaLighting.castShadow(true),
      color: SettingsLevaColor.color("hsl(60, 100%, 70%)"),
      distance: SettingsLevaLighting.distance(),
      intensity: SettingsLevaLighting.intensity(undefined, 20),
      penumbra: SettingsLevaLighting.penumbra(0.25),
      position: SettingsLevaPosition.position(2, 2, 2),
      target: SettingsLevaLighting.target(),
    }),
  });

  const { scene } = useThree();
  const target = new Object3D();
  scene.add(target);

  const directionalLightRef = useRef<DirectionalLight>(null);
  const hemisphereLightRef = useRef<HemisphereLight>(null);
  const pointLightRef = useRef<PointLight>(null);
  const spotLightRef = useRef<SpotLight>(null);

  useHelper(
    helpers ? directionalLightRef : null,
    DirectionalLightHelper,
    helperSize * directionalLight.intensity,
    directionalLight.color
  );

  useHelper(
    helpers ? pointLightRef : null,
    PointLightHelper,
    helperSize * (pointLight.intensity / intensityMax),
    pointLight.color
  );
  useHelper(helpers ? spotLightRef : null, SpotLightHelper, spotLight.color);
  useHelper(
    helpers ? hemisphereLightRef : null,
    HemisphereLightHelper,
    helperSize * hemisphereLight.intensity
  );

  useFrame(() => {
    target.translateX(spotLight.target.x);
    target.translateZ(spotLight.target.z);
  });

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
        position={SettingsLevaPosition.toArray(directionalLight.position)}
        ref={directionalLightRef}
      />
      <hemisphereLight
        castShadow={hemisphereLight.castShadow}
        color={hemisphereLight.color}
        groundColor={hemisphereLight.groundColor}
        intensity={hemisphereLight.intensity}
        name="Hemisphere Light"
        position={SettingsLevaPosition.toArray(hemisphereLight.position)}
        ref={hemisphereLightRef}
      />
      <pointLight
        castShadow={pointLight.castShadow}
        color={pointLight.color}
        intensity={pointLight.intensity}
        name="Point Light"
        position={SettingsLevaPosition.toArray(pointLight.position)}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={spotLight.castShadow}
        color={spotLight.color}
        intensity={spotLight.intensity}
        name="Spotlight"
        penumbra={spotLight.penumbra}
        position={SettingsLevaPosition.toArray(spotLight.position)}
        ref={spotLightRef}
        target={target}
      />
    </group>
  );
};

export { LightingDemo as Demo };
