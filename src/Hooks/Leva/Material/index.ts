import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  BASIC = "Basic (Flat, no light)",
  DREI_REFLECTOR = "Reflector (Drei)",
  DREI_TRANSMISSION = "Transmission (Drei)",
  LAMBERT = "Lambert (NPBR, Gouraud)",
  MATCAP = "Matcap (Material Capture, no light)",
  NONE = "\u2014None\u2014",
  NORMAL = "Normal",
  PHONG = "Phong (NPBR, Blinn-Phong)",
  PHYSICAL = "Physical (PBR, extension of Standard)",
  PHYSICAL_FROSTED_GLASS = "Physical - Frosted Glass",
  STANDARD = "Standard (PBR, Metallic-Roughness)",
  STANDARD_NORMAL_MAP = "Standard - Normal Map",
  TOON = "Toon",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { material } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder(
        {
          material: {
            label: "Material",
            options,
            value,
          },
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    material,
  };
}

export { LEVA_OPTION, useLeva };
