import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialLambert as LambertMaterial } from "Settings/Leva/Material/Lambert";

/**
 * A material for non-shiny surfaces, without specular highlights.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial
 */
const MaterialLambert = (): JSX.Element => {
  const {
    color,
    dithering,
    emissive,
    emissiveIntensity,
    opacity,
    side,
    transparent,
    wireframe,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Materials: folder({
        Material: folder({
          dithering: Material.dithering(),
          opacity: Material.opacity(),
          side: Material.side(),
          transparent: Material.transparent(),
        }),
        "Lambert Material": folder({
          color: LambertMaterial.color(),
          emissive: LambertMaterial.emissive(),
          emissiveIntensity: LambertMaterial.emissiveIntensity(),
          wireframe: LambertMaterial.wireframe(),
        }),
      }),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
  );

  return (
    <meshLambertMaterial
      color={color}
      dithering={dithering}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
      wireframe={wireframe}
    />
  );
};

export { MaterialLambert as Lambert };
