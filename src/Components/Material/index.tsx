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

const MATERIAL = {
  BASIC: <MaterialBasic />,
  LAMBERT: <MaterialLambert />,
  MATCAP: <MaterialMatcap />,
  NORMAL: <MaterialNormal />,
  PHONG: <MaterialPhong />,
  PHYSICAL: <MaterialPhysical />,
  PHYSICAL_FROSTED_GLASS: <MaterialPhysicalFrostedGlass />,
  STANDARD: <MaterialStandard />,
  STANDARD_NORMALMAP: <MaterialStandardNormalMap />,
  TOON: <MaterialToon />,
} as const;

/**
 * Material.
 *
 * @returns {React.JSX.Element}
 */
const Material = (): React.JSX.Element => {
  // Leva Controls.
  const { material } = useLeva(MATERIAL);

  return <>{material}</>;
};

export { Material };
