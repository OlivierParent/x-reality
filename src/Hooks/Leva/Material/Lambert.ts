import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialLambert as LambertMaterial } from "Settings/Leva/Material/Lambert";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    opacity,
    side,
    transparent,
    wireframe,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder(
        {
          Material: folder(
            {
              dithering: Material.dithering(),
              opacity: Material.opacity(),
              side: Material.side(),
              transparent: Material.transparent(),
            },
            SettingsLeva.folder(LEVA.ORDER.MATERIAL)
          ),
          "Lambert Material": folder(
            {
              color: LambertMaterial.color(),
              emissive: LambertMaterial.emissive(),
              emissiveIntensity: LambertMaterial.emissiveIntensity(),
              wireframe: LambertMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.LAMBERT_MATERIAL)
          ),
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    opacity,
    side,
    transparent,
    wireframe,
  };
}

export { useLeva };
