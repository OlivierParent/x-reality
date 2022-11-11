import { folder, useControls } from "leva";

import { Basic } from "Components/Material/Basic";
import { Lambert } from "Components/Material/Lambert";
import { Matcap } from "Components/Material/Matcap";
import { Normal } from "Components/Material/Normal";
import { Phong } from "Components/Material/Phong";
import { Physical } from "Components/Material/Physical";
import { PhysicalFrostedGlass } from "Components/Material/PhysicalFrostedGlass";
import { Standard } from "Components/Material/Standard";
import { StandardNormalMap } from "Components/Material/StandardNormalMap";
import { Toon } from "Components/Material/Toon";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";

const MATERIAL = Object.freeze({
  Basic: "Basic",
  Lambert: "Lambert",
  Matcap: "Matcap",
  Normal: "Normal",
  Phong: "Phong",
  Physical: "Physical",
  PhysicalFrostedGlass: "PhysicalFrostedGlass",
  Standard: "Standard",
  StandardNormalMap: "StandardNormalMap",
  Toon: "Toon",
});

function enableMaterial(name: string) {
  let element;
  switch (name) {
    case MATERIAL.Basic:
      element = <Basic />;
      break;
    case MATERIAL.Lambert:
      element = <Lambert />;
      break;
    case MATERIAL.Matcap:
      element = <Matcap />;
      break;
    case MATERIAL.Normal:
      element = <Normal />;
      break;
    case MATERIAL.Phong:
      element = <Phong />;
      break;
    case MATERIAL.Physical:
      element = <Physical />;
      break;
    case MATERIAL.PhysicalFrostedGlass:
      element = <PhysicalFrostedGlass />;
      break;
    case MATERIAL.StandardNormalMap:
      element = <StandardNormalMap />;
      break;
    case MATERIAL.Toon:
      element = <Toon />;
      break;
    default:
      element = <Standard />;
  }
  return element;
}

const Material = () => {
  const { materialName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder(
        {
          materialName: {
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
        Settings.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return enableMaterial(materialName);
};

export { Material };
