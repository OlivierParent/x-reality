import { useMatcapTexture } from "@react-three/drei";
import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { MATCAP } from "Libs/matcap";
import { SettingsLevaMaterial as Material } from "Settings/Leva/Material";
import { SettingsLevaMaterialMatcap as MatcapMaterial } from "Settings/Leva/Material/Matcap";

/**
 * MeshMatcapMaterial is defined by a MatCap (or Lit Sphere) texture, which encodes the material color and shading.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial
 */
const MaterialMatcap = (): JSX.Element => {
  const { color, dithering, flatShading, opacity, side, transparent } =
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
            color: MatcapMaterial.color(),
            flatShading: MatcapMaterial.flatShading(),
          }),
        }),
      },
      { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
    );
  const [matcap] = useMatcapTexture(MATCAP.ID.WORN_GOLD, MATCAP.SIZE.XL);

  return (
    <meshMatcapMaterial
      color={color}
      dithering={dithering}
      flatShading={flatShading}
      matcap={matcap}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
    />
  );
};

export { MaterialMatcap as Matcap };
