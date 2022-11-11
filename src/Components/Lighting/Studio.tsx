import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLevaColor } from "Settings/Leva/Color";
import { SettingsLevaLighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition } from "Settings/Leva/Position";
import { SettingsLeva as Settings } from "Settings/Leva";

const LightingStudio = (): JSX.Element => {
  const { helpers, helperSize } = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      helpers: SettingsLevaLighting.helpers(),
      helperSize: SettingsLevaLighting.helperSize(),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const ambientLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Ambient Light": folder(
        {
          color: SettingsLevaColor.color(SettingsLevaColor.values.Warm),
          intensity: SettingsLevaLighting.intensity(0.1, 1),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const frontLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Front Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(),
          intensity: SettingsLevaLighting.intensity(0.4),
          position: SettingsLevaPosition.position(0, 2, 4),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const leftLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Left Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Reddish),
          intensity: SettingsLevaLighting.intensity(),
          position: SettingsLevaPosition.position(-4, 0, 0),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const rightLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Right Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Blueish),
          intensity: SettingsLevaLighting.intensity(),
          position: SettingsLevaPosition.position(4, 0, 0),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );

  const frontLightRef = useRef<DirectionalLight>(null);
  const leftLightRef = useRef<DirectionalLight>(null);
  const rightLightRef = useRef<DirectionalLight>(null);

  useHelper(
    helpers ? frontLightRef : null,
    DirectionalLightHelper,
    helperSize * frontLight.intensity,
    frontLight.color
  );
  useHelper(
    helpers ? leftLightRef : null,
    DirectionalLightHelper,
    helperSize * leftLight.intensity,
    leftLight.color
  );
  useHelper(
    helpers ? rightLightRef : null,
    DirectionalLightHelper,
    helperSize * rightLight.intensity,
    rightLight.color
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
        position={SettingsLevaPosition.toArray(frontLight.position)}
        ref={frontLightRef}
      />
      <directionalLight
        castShadow={leftLight.castShadow}
        color={leftLight.color}
        intensity={leftLight.intensity}
        name="Left Light"
        position={SettingsLevaPosition.toArray(leftLight.position)}
        ref={leftLightRef}
      />
      <directionalLight
        castShadow={rightLight.castShadow}
        color={rightLight.color}
        intensity={rightLight.intensity}
        name="Right Light"
        position={SettingsLevaPosition.toArray(rightLight.position)}
        ref={rightLightRef}
      />
    </group>
  );
};

export { LightingStudio as Studio };
