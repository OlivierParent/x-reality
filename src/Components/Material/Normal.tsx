import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialNormal as NormalMaterial } from "Settings/Leva/Material/Normal";

/**
 * A material that maps the normal vectors to RGB colors.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshNormalMaterial
 */
const MaterialNormal = (): JSX.Element => {
  const { dithering, flatShading, opacity, side, transparent, wireframe } =
    useControls(
      LEVA.SCHEMA.COMPONENTS,
      {
        Materials: folder({
          Material: folder({
            dithering: Material.dithering(),
            opacity: Material.opacity(),
            side: Material.side(),
            transparent: Material.transparent(),
          }),
          "Normal Material": folder({
            flatShading: NormalMaterial.flatShading(),
            wireframe: NormalMaterial.wireframe(),
          }),
        }),
      },
      { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
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

export { MaterialNormal as Normal };
