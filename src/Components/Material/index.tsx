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
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Material";

const LEVA_OPTIONS = {
  [LEVA_OPTION.NONE]: undefined,
  [LEVA_OPTION.BASIC]: <MaterialBasic />,
  [LEVA_OPTION.MATCAP]: <MaterialMatcap />,
  [LEVA_OPTION.LAMBERT]: <MaterialLambert />,
  [LEVA_OPTION.PHONG]: <MaterialPhong />,
  [LEVA_OPTION.NORMAL]: <MaterialNormal />,
  [LEVA_OPTION.STANDARD]: <MaterialStandard />,
  [LEVA_OPTION.STANDARD_NORMAL_MAP]: <MaterialStandardNormalMap />,
  [LEVA_OPTION.PHYSICAL]: <MaterialPhysical />,
  [LEVA_OPTION.PHYSICAL_FROSTED_GLASS]: <MaterialPhysicalFrostedGlass />,
  [LEVA_OPTION.TOON]: <MaterialToon />,
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
    LEVA_OPTIONS[LEVA_OPTION.STANDARD]
  );

  return <>{material}</>;
};

export { Material };
