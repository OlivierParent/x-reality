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
              size: Lighting.helperSize(),
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
  const frontLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Front Light": folder(
        {
          castShadow: Lighting.castShadow(true),
          color: Color.color(),
          intensity: Lighting.intensity(1.4),
          position: Position.position(0, 2, 4),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  const leftLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Left Light": folder(
        {
          castShadow: Lighting.castShadow(true),
          color: Color.color(Color.values.Reddish),
          intensity: Lighting.intensity(2.0),
          position: Position.position(-4, 0, 0),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  const rightLight = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      "Right Light": folder(
        {
          castShadow: Lighting.castShadow(true),
          color: Color.color(Color.values.Blueish),
          intensity: Lighting.intensity(2.0),
          position: Position.position(4, 0, 0),
        },
        SettingsLeva.folder()
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  return {
    lightHelper,
    ambientLight,
    frontLight,
    leftLight,
    rightLight,
  };
}

export { fromLevaPosition, useLeva };
