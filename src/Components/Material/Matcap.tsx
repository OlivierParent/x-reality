import { useMatcapTexture } from "@react-three/drei";
import { Side } from "three";

import { useLeva } from "Hooks/Leva/Material/Matcap";
import { MATCAP } from "Libs/matcap";

/**
 * MatCap (Material Capture) Material.
 *
 * MeshMatcapMaterial is defined by a MatCap (or Lit Sphere) texture, which encodes the material color and shading.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial
 *
 * @returns {JSX.Element}
 */
const MaterialMatcap = (): JSX.Element => {
  // Leva Controls.
  const { color, dithering, flatShading, opacity, side, transparent } =
    useLeva();

  // Matcap Textures.
  const [titaniumMatcapTexture] = useMatcapTexture(
    MATCAP.ID.TITANIUM, //
    MATCAP.SIZE.XL
  );

  return (
    <meshMatcapMaterial
      color={color}
      dithering={dithering}
      flatShading={flatShading}
      matcap={titaniumMatcapTexture}
      opacity={opacity}
      side={side as Side}
      transparent={transparent}
    />
  );
};

export { MaterialMatcap as Material };
