import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useRef } from "react";
import { ColorRepresentation, SpotLight, SpotLightHelper } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaColor } from "Settings/Leva/Color";
import { SettingsLevaLighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition } from "Settings/Leva/Position";

const LightingThreePoint = (): JSX.Element => {
  const { helpers } = useControls(LEVA.SCHEMA.LIGHTING, {
    helpers: { label: "Helpers", value: false },
  });
  const ambientLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Ambient Light": folder(
        {
          color: SettingsLevaColor.color(SettingsLevaColor.values.Warm),
          intensity: SettingsLevaLighting.intensity(0.2),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const backLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Back Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Warm),
          intensity: SettingsLevaLighting.intensity(75.0),
          position: SettingsLevaPosition.position(4, 2, -4),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const fillLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Fill Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Blueish),
          intensity: SettingsLevaLighting.intensity(75.0),
          position: SettingsLevaPosition.position(-4, 2, 4),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );
  const keyLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Key Light": folder(
        {
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Reddish),
          intensity: SettingsLevaLighting.intensity(75.0),
          position: SettingsLevaPosition.position(4, 2, 4),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );

  const backLightRef = useRef<SpotLight>(null!);
  const fillLightRef = useRef<SpotLight>(null!);
  const keyLightRef = useRef<SpotLight>(null!);

  useHelper(
    helpers ? backLightRef : null,
    SpotLightHelper,
    backLight.color as ColorRepresentation
  );
  useHelper(
    helpers ? fillLightRef : null,
    SpotLightHelper,
    fillLight.color as ColorRepresentation
  );
  useHelper(
    helpers ? keyLightRef : null,
    SpotLightHelper,
    keyLight.color as ColorRepresentation
  );

  return (
    <group name="Three Point Lighting">
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
        name="Ambient Light"
      />
      <spotLight
        castShadow={backLight.castShadow}
        color={backLight.color}
        intensity={backLight.intensity}
        name="Back Light"
        position={SettingsLevaPosition.toArray(backLight.position)}
        ref={backLightRef}
      />
      <spotLight
        castShadow={fillLight.castShadow}
        color={fillLight.color}
        intensity={fillLight.intensity}
        name="Fill Light"
        position={SettingsLevaPosition.toArray(fillLight.position)}
        ref={fillLightRef}
      />
      <spotLight
        castShadow={keyLight.castShadow}
        color={keyLight.color}
        name="Key Light"
        intensity={keyLight.intensity}
        position={SettingsLevaPosition.toArray(keyLight.position)}
        ref={keyLightRef}
      />
    </group>
  );
};

export { LightingThreePoint as ThreePoint };
