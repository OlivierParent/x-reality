import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialPhong as PhongMaterial } from "Settings/Leva/Material/Phong";

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
    opacity,
    shininess,
    side,
    specular,
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
          "Phong Material": folder(
            {
              color: PhongMaterial.color(),
              emissive: PhongMaterial.emissive(),
              emissiveIntensity: PhongMaterial.emissiveIntensity(),
              flatShading: PhongMaterial.flatShading(),
              shininess: PhongMaterial.shininess(),
              specular: PhongMaterial.specular(),
              wireframe: PhongMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.PHONG_MATERIAL)
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
    opacity,
    shininess,
    side,
    specular,
    transparent,
    wireframe,
  };
}

export { useLeva };
