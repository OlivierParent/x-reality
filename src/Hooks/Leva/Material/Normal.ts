import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialNormal as NormalMaterial } from "Settings/Leva/Material/Normal";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    dithering, //
    flatShading,
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
          "Normal Material": folder(
            {
              flatShading: NormalMaterial.flatShading(),
              wireframe: NormalMaterial.wireframe(),
            },
            SettingsLeva.folder(LEVA.ORDER.NORMAL_MATERIAL)
          ),
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    dithering,
    flatShading,
    opacity,
    side,
    transparent,
    wireframe,
  };
}

export { useLeva };
