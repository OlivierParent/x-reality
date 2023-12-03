import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    metalness,
    opacity,
    roughness,
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
          "Standard Material": folder(
            {
              color: StandardMaterial.color(),
              emissive: StandardMaterial.emissive(),
              emissiveIntensity: StandardMaterial.emissiveIntensity(),
              flatShading: StandardMaterial.flatShading(),
              metalness: StandardMaterial.metalness(),
              roughness: StandardMaterial.roughness(),
              wireframe: StandardMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.STANDARD_MATERIAL)
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
    flatShading,
    metalness,
    opacity,
    roughness,
    side,
    transparent,
    wireframe,
  };
}

export { useLeva };
