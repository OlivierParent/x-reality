import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(MATERIAL: any) {
  const { material } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder(
        {
          material: {
            label: "Material",
            options: {
              "Basic (Flat, no light)               ": MATERIAL.BASIC,
              "Matcap (Material Capture, no light)  ": MATERIAL.MATCAP,
              "Lambert (NPBR, Gouraud)              ": MATERIAL.LAMBERT,
              "Phong (NPBR, Blinn-Phong)            ": MATERIAL.PHONG,
              "Standard (PBR, Metallic-Roughness)   ": MATERIAL.STANDARD,
              "Standard - Normal Map                ":
                MATERIAL.STANDARD_NORMALMAP,
              "Physical (PBR, extension of Standard)": MATERIAL.PHYSICAL,
              "Physical - Frosted Glass             ":
                MATERIAL.PHYSICAL_FROSTED_GLASS,
              "Toon                                 ": MATERIAL.TOON,
            },
            value: MATERIAL.STANDARD,
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

export { useLeva };
