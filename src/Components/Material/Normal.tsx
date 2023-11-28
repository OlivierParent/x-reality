import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialNormal as NormalMaterial } from "Settings/Leva/Material/Normal";

/**
 * Normal Material.
 *
 * A material that maps the normal vectors to RGB colors.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshNormalMaterial
 *
 * @returns {React.JSX.Element}
 */
const MaterialNormal = (): React.JSX.Element => {
  // Leva Controls.
  const { dithering, flatShading, opacity, side, transparent, wireframe } =
    useControls(
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

  return (
    <meshNormalMaterial
      dithering={dithering}
      flatShading={flatShading}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialNormal as Material };
