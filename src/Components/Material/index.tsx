import { folder, useControls } from "leva";

import { Material as MaterialBasic } from "Components/Material/Basic";
import { Material as MaterialLambert } from "Components/Material/Lambert";
import { Material as MaterialMatcap } from "Components/Material/Matcap";
import { Material as MaterialNormal } from "Components/Material/Normal";
import { Material as MaterialPhong } from "Components/Material/Phong";
import { Material as MaterialPhysical } from "Components/Material/Physical";
import { Material as MaterialPhysicalFrostedGlass } from "Components/Material/PhysicalFrostedGlass";
import { Material as MaterialStandard } from "Components/Material/Standard";
import { Material as MaterialStandardNormalMap } from "Components/Material/StandardNormalMap";
import { Material as MaterialToon } from "Components/Material/Toon";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const MATERIAL = {
  Basic: <MaterialBasic />,
  Lambert: <MaterialLambert />,
  Matcap: <MaterialMatcap />,
  Normal: <MaterialNormal />,
  Phong: <MaterialPhong />,
  Physical: <MaterialPhysical />,
  PhysicalFrostedGlass: <MaterialPhysicalFrostedGlass />,
  Standard: <MaterialStandard />,
  StandardNormalMap: <MaterialStandardNormalMap />,
  Toon: <MaterialToon />,
} as const;

/**
 * Material.
 *
 * @returns {React.JSX.Element}
 */
const Material = (): React.JSX.Element => {
  // Leva Controls.
  const { material } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder(
        {
          material: {
            label: "Material",
            options: {
              "Basic (Flat, no light)               ": MATERIAL.Basic,
              "Matcap (Material Capture, no light)  ": MATERIAL.Matcap,
              "Lambert (NPBR, Gouraud)              ": MATERIAL.Lambert,
              "Phong (NPBR, Blinn-Phong)            ": MATERIAL.Phong,
              "Standard (PBR, Metallic-Roughness)   ": MATERIAL.Standard,
              "Standard - Normal Map                ":
                MATERIAL.StandardNormalMap,
              "Physical (PBR, extension of Standard)": MATERIAL.Physical,
              "Physical - Frosted Glass             ":
                MATERIAL.PhysicalFrostedGlass,
              "Toon                                 ": MATERIAL.Toon,
            },
            value: MATERIAL.Standard,
          },
        },
        SettingsLeva.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return material;
};

export { Material };
