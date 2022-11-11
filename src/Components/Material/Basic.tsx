import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialBasic as BasicMaterial } from "Settings/Leva/Material/Basic";

/**
 * A material for drawing geometries in a simple shaded (flat or wireframe) way.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial
 */
const MaterialBasic = (): JSX.Element => {
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
            Settings.folder(LEVA.ORDER.MATERIAL)
          ),
          "Basic Material": folder(
            {
              color: BasicMaterial.color(),
              reflectivity: BasicMaterial.reflectivity(),
              refractionRatio: BasicMaterial.refractionRatio(),
              wireframe: BasicMaterial.wireframe(),
            },
            Settings.folder(LEVA.ORDER.BASIC_MATERIAL)
          ),
        },
        Settings.folder(LEVA.ORDER.MATERIALS)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <meshBasicMaterial
      color={color}
      dithering={dithering}
      opacity={opacity}
      reflectivity={reflectivity}
      refractionRatio={refractionRatio}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialBasic as Basic };
