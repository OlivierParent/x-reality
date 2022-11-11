import { useMatcapTexture } from "@react-three/drei";
import { folder, useControls } from "leva";
import { Side } from "three";

import { LEVA } from "Configs/leva";
import { MATCAP } from "Libs/matcap";
import { SettingsLeva as Settings } from "Settings/Leva";
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
            "Matcap Material": folder(
              {
                color: MatcapMaterial.color(),
                flatShading: MatcapMaterial.flatShading(),
              },
              Settings.folder(LEVA.ORDER.MATCAP_MATERIAL)
            ),
          },
          Settings.folder(LEVA.ORDER.MATERIALS)
        ),
      },
      Settings.folder(LEVA.ORDER.COMPONENTS)
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
