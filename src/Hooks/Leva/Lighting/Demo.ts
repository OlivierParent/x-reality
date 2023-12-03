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
          color: Color.color(),
          intensity: Lighting.intensity(0.2),
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
          castShadow: Lighting.castShadow(true),
          color: Color.color("hsl(120, 100%, 70%)"),
          intensity: Lighting.intensity(1),
          position: Position.position(4, 4, 1),
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
          castShadow: Lighting.castShadow(true),
          color: Color.color("hsl(210, 100%, 70%)", "Sky"),
          groundColor: Color.color("hsl(30, 100%, 70%)", "Ground"),
          intensity: Lighting.intensity(1),
          position: Position.position(0, 1, 0),
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
          castShadow: Lighting.castShadow(true),
          color: Color.color("hsl(240, 100%, 70%)"),
          distance: Lighting.distance(),
          decay: Lighting.decay(),
          intensity: Lighting.intensity(1.0),
          position: Position.position(-4, 1, 4),
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
          angle: Lighting.angle(30),
          castShadow: Lighting.castShadow(true),
          color: Color.color("hsl(60, 100%, 70%)"),
          decay: Lighting.decay(),
          distance: Lighting.distance(9),
          intensity: Lighting.intensity(),
          penumbra: Lighting.penumbra(2.5),
          position: Position.position(2, 2, 2),
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
    directionalLight,
    hemisphereLight,
    pointLight,
    spotLight,
  };
}

export { fromLevaPosition, useLeva };
