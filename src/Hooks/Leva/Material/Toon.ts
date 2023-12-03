import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialToon as ToonMaterial } from "Settings/Leva/Material/Toon";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    color,
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
          "Toon Material": folder(
            {
              color: ToonMaterial.color(),
              emissive: ToonMaterial.emissive(),
              emissiveIntensity: ToonMaterial.emissiveIntensity(),
              wireframe: ToonMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.TOON_MATERIAL)
          ),
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    color,
    emissive,
    emissiveIntensity,
    opacity,
    side,
    transparent,
    wireframe,
  };
}

export { useLeva };
