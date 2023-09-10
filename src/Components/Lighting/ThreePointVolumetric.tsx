import { SpotLight, useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useRef } from "react";
import {
  ColorRepresentation,
  MathUtils,
  SpotLight as ThreeSpotLight,
  SpotLightHelper,
} from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaColor } from "Settings/Leva/Color";
import { SettingsLevaLighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition } from "Settings/Leva/Position";

const LightingThreePointVolumetric = (): JSX.Element => {
  const { helpers } = useControls(LEVA.SCHEMA.LIGHTING, {
    helpers: { label: "Helpers", value: false },
  });
  const ambientLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Ambient Light": folder(
        {
          color: SettingsLevaColor.color(SettingsLevaColor.values.Warm),
          intensity: SettingsLevaLighting.intensity(0.1),
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
          angle: SettingsLevaLighting.angle(),
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Warm),
          distance: SettingsLevaLighting.distance(7),
          intensity: SettingsLevaLighting.intensity(75.0),
          penumbra: SettingsLevaLighting.penumbra(),
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
          angle: SettingsLevaLighting.angle(),
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Blueish),
          distance: SettingsLevaLighting.distance(7),
          intensity: SettingsLevaLighting.intensity(75.0),
          penumbra: SettingsLevaLighting.penumbra(),
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
          angle: SettingsLevaLighting.angle(),
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Reddish),
          distance: SettingsLevaLighting.distance(7),
          intensity: SettingsLevaLighting.intensity(75.0),
          penumbra: SettingsLevaLighting.penumbra(),
          position: SettingsLevaPosition.position(4, 2, 4),
        },
        Settings.folder()
      ),
    },
    Settings.folder(LEVA.ORDER.LIGHTING)
  );

  const backLightRef = useRef<ThreeSpotLight>(null!);
  const fillLightRef = useRef<ThreeSpotLight>(null!);
  const keyLightRef = useRef<ThreeSpotLight>(null!);

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
      <SpotLight
        angle={MathUtils.degToRad(backLight.angle)}
        castShadow={backLight.castShadow}
        color={backLight.color}
        distance={backLight.distance}
        intensity={backLight.intensity}
        name="Back Light"
        penumbra={backLight.penumbra}
        position={SettingsLevaPosition.toArray(backLight.position)}
        ref={backLightRef}
      />
      <SpotLight
        angle={MathUtils.degToRad(fillLight.angle)}
        castShadow={fillLight.castShadow}
        color={fillLight.color}
        distance={fillLight.distance}
        intensity={fillLight.intensity}
        name="Fill Light"
        penumbra={fillLight.penumbra}
        position={SettingsLevaPosition.toArray(fillLight.position)}
        ref={fillLightRef}
      />
      <SpotLight
        angle={MathUtils.degToRad(keyLight.angle)}
        castShadow={keyLight.castShadow}
        color={keyLight.color}
        distance={keyLight.distance}
        intensity={keyLight.intensity}
        name="Key Light"
        penumbra={keyLight.penumbra}
        position={SettingsLevaPosition.toArray(keyLight.position)}
        ref={keyLightRef}
      />
    </group>
  );
};

export { LightingThreePointVolumetric as ThreePointVolumetric };
