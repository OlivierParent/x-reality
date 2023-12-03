import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialMatcap as MatcapMaterial } from "Settings/Leva/Material/Matcap";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    color, //
    dithering,
    flatShading,
    opacity,
    side,
    transparent,
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
          "Matcap Material": folder(
            {
              color: MatcapMaterial.color(),
              flatShading: MatcapMaterial.flatShading(),
            },
            SettingsLeva.folder(LEVA.ORDER.MATCAP_MATERIAL)
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
    flatShading,
    opacity,
    side,
    transparent,
  };
}

export { useLeva };
