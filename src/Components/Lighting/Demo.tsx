import { useHelper } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useRef } from "react";
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

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaColor as LevaColor } from "Settings/Leva/Color";
import { SettingsLevaLighting as LevaLighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition as LevaPosition } from "Settings/Leva/Position";

const intensityMax = 20;

const LightingDemo = (): JSX.Element => {
  const { helpers, helperSize } = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      helpers: LevaLighting.helpers(),
      helperSize: LevaLighting.helperSize(),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const ambientLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Ambient Light": folder(
        {
          color: LevaColor.color(),
          intensity: LevaLighting.intensity(0.2),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const directionalLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Directional Light": folder(
        {
          castShadow: LevaLighting.castShadow(true),
          color: LevaColor.color("hsl(120, 100%, 70%)"),
          intensity: LevaLighting.intensity(1),
          position: LevaPosition.position(4, 4, 1),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const hemisphereLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Hemisphere Light": folder(
        {
          castShadow: LevaLighting.castShadow(true),
          color: LevaColor.color("hsl(210, 100%, 70%)", "Sky"),
          groundColor: LevaColor.color("hsl(30, 100%, 70%)", "Ground"),
          intensity: LevaLighting.intensity(1),
          position: LevaPosition.position(0, 1, 0),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const pointLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Point Light": folder(
        {
          castShadow: LevaLighting.castShadow(true),
          color: LevaColor.color("hsl(240, 100%, 70%)"),
          intensity: LevaLighting.intensity(1.0),
          position: LevaPosition.position(-4, 1, 4),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const spotLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      Spotlight: folder(
        {
          castShadow: LevaLighting.castShadow(true),
          color: LevaColor.color("hsl(60, 100%, 70%)"),
          distance: LevaLighting.distance(),
          intensity: LevaLighting.intensity(),
          penumbra: LevaLighting.penumbra(2.5),
          position: LevaPosition.position(2, 2, 2),
          target: LevaLighting.target(),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );

  const { scene } = useThree();
  const target = new Object3D();
  scene.add(target);

  const directionalLightRef = useRef<DirectionalLight>(null!);
  const hemisphereLightRef = useRef<HemisphereLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  const spotLightRef = useRef<SpotLight>(null!);

  useHelper(
    helpers ? directionalLightRef : null,
    DirectionalLightHelper,
    helperSize * directionalLight.intensity,
    directionalLight.color as ColorRepresentation
  );

  useHelper(
    helpers ? pointLightRef : null,
    PointLightHelper,
    helperSize * (pointLight.intensity / intensityMax),
    pointLight.color as ColorRepresentation
  );
  useHelper(
    helpers ? spotLightRef : null,
    SpotLightHelper,
    spotLight.color as ColorRepresentation
  );
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
        position={LevaPosition.toArray(directionalLight.position)}
        ref={directionalLightRef}
      />
      <hemisphereLight
        castShadow={hemisphereLight.castShadow}
        color={hemisphereLight.color}
        groundColor={hemisphereLight.groundColor}
        intensity={hemisphereLight.intensity}
        name="Hemisphere Light"
        position={LevaPosition.toArray(hemisphereLight.position)}
        ref={hemisphereLightRef}
      />
      <pointLight
        castShadow={pointLight.castShadow}
        color={pointLight.color}
        intensity={pointLight.intensity}
        name="Point Light"
        position={LevaPosition.toArray(pointLight.position)}
        ref={pointLightRef}
      />
      <spotLight
        angle={MathUtils.degToRad(30)}
        castShadow={spotLight.castShadow}
        color={spotLight.color}
        intensity={spotLight.intensity}
        name="Spotlight"
        penumbra={spotLight.penumbra}
        position={LevaPosition.toArray(spotLight.position)}
        ref={spotLightRef}
        target={target}
      />
    </group>
  );
};

export { LightingDemo as Demo };
