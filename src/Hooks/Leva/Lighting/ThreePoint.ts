import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaColor as Color } from "Settings/Leva/Color";
import { SettingsLevaLighting as Lighting } from "Settings/Leva/Lighting";
import { SettingsLevaPosition as Position } from "Settings/Leva/Position";

const fromLevaPosition = Position.toArray;

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const lightHelper = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Helpers: folder(
        {
          Lighting: folder(
            {
              show: Lighting.helperShow(),
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
          color: Color.color(Color.values.Warm),
          intensity: Lighting.intensity(0.2),
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
          angle: Lighting.angle(30),
          castShadow: Lighting.castShadow(true),
          color: Color.color(Color.values.Warm),
          decay: Lighting.decay(),
          distance: Lighting.distance(9),
          intensity: Lighting.intensity(75.0),
          penumbra: Lighting.penumbra(),
          position: Position.position(4, 2, -4),
          target: Lighting.target(),
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
          angle: Lighting.angle(30),
          castShadow: Lighting.castShadow(true),
          color: Color.color(Color.values.Blueish),
          decay: Lighting.decay(),
          distance: Lighting.distance(9),
          intensity: Lighting.intensity(75.0),
          penumbra: Lighting.penumbra(),
          position: Position.position(-4, 2, 4),
          target: Lighting.target(),
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
          angle: Lighting.angle(30),
          castShadow: Lighting.castShadow(true),
          color: Color.color(Color.values.Reddish),
          decay: Lighting.decay(),
          distance: Lighting.distance(9),
          intensity: Lighting.intensity(75.0),
          penumbra: Lighting.penumbra(),
          position: Position.position(4, 2, 4),
          target: Lighting.target(),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  return {
    lightHelper,
    ambientLight,
    backLight,
    fillLight,
    keyLight,
  };
}

export { fromLevaPosition, useLeva };
