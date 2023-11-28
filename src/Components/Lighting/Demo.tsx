import { useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { folder, useControls } from "leva";
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

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaColor } from "Settings/Leva/Color";
import { SettingsLevaLighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition } from "Settings/Leva/Position";

const intensityMax = 20;
const target = new Object3D();

/**
 * Lighting Demo.
 *
 * @returns {React.JSX.Element}
 */
const LightingDemo = (): React.JSX.Element => {
  // Leva Controls.
  const { helpers, helperSize } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Helpers: folder(
        {
          Lighting: folder(
            {
              helpers: SettingsLevaLighting.helpers(),
              helperSize: SettingsLevaLighting.helperSize(),
            },
            SettingsLeva.folder()
          ),
        },
        SettingsLeva.folder(LEVA.ORDER.HELPERS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );
  const ambientLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Ambient Light": folder(
        {
          color: SettingsLevaColor.color(),
          intensity: SettingsLevaLighting.intensity(0.2),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );
  const directionalLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Directional Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color("hsl(120, 100%, 70%)"),
          intensity: SettingsLevaLighting.intensity(1),
          position: SettingsLevaPosition.position(4, 4, 1),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );
  const hemisphereLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Hemisphere Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color("hsl(210, 100%, 70%)", "Sky"),
          groundColor: SettingsLevaColor.color("hsl(30, 100%, 70%)", "Ground"),
          intensity: SettingsLevaLighting.intensity(1),
          position: SettingsLevaPosition.position(0, 1, 0),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );
  const pointLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Point Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color("hsl(240, 100%, 70%)"),
          distance: SettingsLevaLighting.distance(),
          decay: SettingsLevaLighting.decay(),
          intensity: SettingsLevaLighting.intensity(1.0),
          position: SettingsLevaPosition.position(-4, 1, 4),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );
  const spotLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      Spotlight: folder(
        {
          angle: SettingsLevaLighting.angle(30),
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color("hsl(60, 100%, 70%)"),
          decay: SettingsLevaLighting.decay(),
          distance: SettingsLevaLighting.distance(9),
          intensity: SettingsLevaLighting.intensity(),
          penumbra: SettingsLevaLighting.penumbra(2.5),
          position: SettingsLevaPosition.position(2, 2, 2),
          target: SettingsLevaLighting.target(),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  const { scene } = useThree();
  scene.add(target);

  // References.
  const directionalLightRef = useRef<DirectionalLight>(null!);
  const hemisphereLightRef = useRef<HemisphereLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);
  const spotLightRef = useRef<SpotLight>(null!);

  // Helpers.
  useHelper(
    helpers ? directionalLightRef : null,
    DirectionalLightHelper,
    helperSize * directionalLight.intensity,
    directionalLight.color as ColorRepresentation
  );
  useHelper(
    helpers ? hemisphereLightRef : null,
    HemisphereLightHelper,
    helperSize * hemisphereLight.intensity
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
        distance={pointLight.distance}
        decay={pointLight.decay}
        intensity={pointLight.intensity}
        name="Point Light"
        position={SettingsLevaPosition.toArray(pointLight.position)}
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
        position={SettingsLevaPosition.toArray(spotLight.position)}
        ref={spotLightRef}
        target={target}
      />
    </group>
  );
};

export { LightingDemo as Lighting };
