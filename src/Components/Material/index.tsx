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
import { useLeva } from "Hooks/Leva/Material";

const LEVA_OPTIONS = {
  "\u2014None\u2014": <></>,
  "Basic (Flat, no light)": <MaterialBasic />,
  "Matcap (Material Capture, no light)": <MaterialMatcap />,
  "Lambert (NPBR, Gouraud)": <MaterialLambert />,
  "Phong (NPBR, Blinn-Phong)": <MaterialPhong />,
  "Normal\u0000": <MaterialNormal />,
  "Standard (PBR, Metallic-Roughness)": <MaterialStandard />,
  "Standard - Normal Map": <MaterialStandardNormalMap />,
  "Physical (PBR, extension of Standard)": <MaterialPhysical />,
  "Physical - Frosted Glass": <MaterialPhysicalFrostedGlass />,
  "Toon\u0000": <MaterialToon />,
} as const;

/**
 * Material.
 *
 * @returns {React.JSX.Element}
 */
const Material = (): React.JSX.Element => {
  // Leva Controls.
  const { material } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS["Standard (PBR, Metallic-Roughness)"]
  );

  return <>{material}</>;
};

export { Material };
