import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    color,
    dithering,
    opacity,
    reflectivity,
    refractionRatio,
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
          "Basic Material": folder(
            {
              color: BasicMaterial.color(),
              reflectivity: BasicMaterial.reflectivity(),
              refractionRatio: BasicMaterial.refractionRatio(),
              wireframe: BasicMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.BASIC_MATERIAL)
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
    opacity,
    reflectivity,
    refractionRatio,
    side,
    transparent,
    wireframe,
  };
}

export { useLeva };
