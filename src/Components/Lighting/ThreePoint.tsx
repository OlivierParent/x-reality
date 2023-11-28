import { useHelper } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useEffect, useRef } from "react";
import {
  ColorRepresentation,
  MathUtils,
  Object3D,
  SpotLight,
  SpotLightHelper,
} from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaColor } from "Settings/Leva/Color";
import { SettingsLevaLighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition } from "Settings/Leva/Position";

const backLightTarget = new Object3D();
const fillLightTarget = new Object3D();
const keyLightTarget = new Object3D();

/**
 * Three Point Lighting.
 *
 * @returns {React.JSX.Element}
 */
const LightingThreePoint = (): React.JSX.Element => {
  // Leva Controls.
  const { helpers } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Helpers: folder(
        {
          Lighting: folder(
            {
              helpers: SettingsLevaLighting.helpers(),
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
          color: SettingsLevaColor.color(SettingsLevaColor.values.Warm),
          intensity: SettingsLevaLighting.intensity(0.2),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );
  const backLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Back Light": folder(
        {
          angle: SettingsLevaLighting.angle(30),
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Warm),
          decay: SettingsLevaLighting.decay(),
          distance: SettingsLevaLighting.distance(9),
          intensity: SettingsLevaLighting.intensity(75.0),
          penumbra: SettingsLevaLighting.penumbra(),
          position: SettingsLevaPosition.position(4, 2, -4),
          target: SettingsLevaLighting.target(),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );
  const fillLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Fill Light": folder(
        {
          angle: SettingsLevaLighting.angle(30),
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Blueish),
          decay: SettingsLevaLighting.decay(),
          distance: SettingsLevaLighting.distance(9),
          intensity: SettingsLevaLighting.intensity(75.0),
          penumbra: SettingsLevaLighting.penumbra(),
          position: SettingsLevaPosition.position(-4, 2, 4),
          target: SettingsLevaLighting.target(),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );
  const keyLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Key Light": folder(
        {
          angle: SettingsLevaLighting.angle(30),
          castShadow: SettingsLevaLighting.castShadow(true),
          color: SettingsLevaColor.color(SettingsLevaColor.values.Reddish),
          decay: SettingsLevaLighting.decay(),
          distance: SettingsLevaLighting.distance(9),
          intensity: SettingsLevaLighting.intensity(75.0),
          penumbra: SettingsLevaLighting.penumbra(),
          position: SettingsLevaPosition.position(4, 2, 4),
          target: SettingsLevaLighting.target(),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  // References.
  const backLightRef = useRef<SpotLight>(null!);
  const fillLightRef = useRef<SpotLight>(null!);
  const keyLightRef = useRef<SpotLight>(null!);

  // Helpers.
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
    <group name="Three Point Lighting">
      <ambientLight
        color={ambientLight.color}
        intensity={ambientLight.intensity}
        name="Ambient Light"
      />
      <spotLight
        angle={MathUtils.degToRad(backLight.angle)}
        castShadow={backLight.castShadow}
        color={backLight.color}
        decay={backLight.decay}
        distance={backLight.distance}
        intensity={backLight.intensity}
        name="Back Light"
        penumbra={backLight.penumbra}
        position={SettingsLevaPosition.toArray(backLight.position)}
        ref={backLightRef}
        target={backLightTarget}
      />
      <spotLight
        angle={MathUtils.degToRad(fillLight.angle)}
        castShadow={fillLight.castShadow}
        color={fillLight.color}
        decay={fillLight.decay}
        distance={fillLight.distance}
        intensity={fillLight.intensity}
        name="Fill Light"
        penumbra={fillLight.penumbra}
        position={SettingsLevaPosition.toArray(fillLight.position)}
        ref={fillLightRef}
        target={fillLightTarget}
      />
      <spotLight
        angle={MathUtils.degToRad(keyLight.angle)}
        castShadow={keyLight.castShadow}
        color={keyLight.color}
        decay={keyLight.decay}
        distance={keyLight.distance}
        intensity={keyLight.intensity}
        name="Key Light"
        penumbra={keyLight.penumbra}
        position={SettingsLevaPosition.toArray(keyLight.position)}
        ref={keyLightRef}
        target={keyLightTarget}
      />
    </group>
  );
};

export { LightingThreePoint as Lighting };
