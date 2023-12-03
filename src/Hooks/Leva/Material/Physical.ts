import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialPhysical as PhysicalMaterial } from "Settings/Leva/Material/Physical";
import { SettingsLevaMaterialStandard as StandardMaterial } from "Settings/Leva/Material/Standard";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    clearcoat,
    clearcoatRoughness,
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    ior,
    metalness,
    opacity,
    reflectivity,
    roughness,
    sheen,
    sheenColor,
    sheenRoughness,
    side,
    thickness,
    transmission,
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
          "Physical Material": folder(
            {
              clearcoat: PhysicalMaterial.clearcoat(),
              clearcoatRoughness: PhysicalMaterial.clearcoatRoughness(),
              ior: PhysicalMaterial.ior(),
              reflectivity: PhysicalMaterial.reflectivity(),
              sheen: PhysicalMaterial.sheen(),
              sheenColor: PhysicalMaterial.sheenColor(),
              sheenRoughness: PhysicalMaterial.sheenRoughness(),
              thickness: PhysicalMaterial.thickness(),
              transmission: PhysicalMaterial.transmission(),
            },
            SettingsLeva.folder(LEVA.ORDER.PHYSICAL_MATERIAL)
          ),
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    clearcoat,
    clearcoatRoughness,
    color,
    dithering,
    emissive,
    emissiveIntensity,
    flatShading,
    ior,
    metalness,
    opacity,
    reflectivity,
    roughness,
    sheen,
    sheenColor,
    sheenRoughness,
    side,
    thickness,
    transmission,
    transparent,
    wireframe,
  };
}

export { useLeva };
