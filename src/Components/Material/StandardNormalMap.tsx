import { useNormalTexture } from "@react-three/drei";
import { Vector2 } from "three";

import { useLeva } from "Hooks/Leva/Material/StandardNormalMap";

/**
 * Standard Material with Normal Map.
 *
 * @returns {React.JSX.Element}
 */
const MaterialStandardNormalMap = (): React.JSX.Element => {
  // Leva Controls.
  const {
    normalAnisotropy,
    normalOffset,
    normalRepeat,
    normalScale,
    normalTextureId,
  } = useLeva();

  // Texture.
  const [normalMap] = useNormalTexture(
    normalTextureId, // Index or file name, see: https://github.com/emmelleppi/normal-maps/
    {
      anisotropy: normalAnisotropy,
      offset: [normalOffset.x, normalOffset.y],
      repeat: [normalRepeat.x, normalRepeat.y],
    }
  );

  return (
    <meshStandardMaterial
      normalMap={normalMap}
      normalScale={new Vector2(normalScale, normalScale)}
    />
  );
};

export { MaterialStandardNormalMap as Material };
