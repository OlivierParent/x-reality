import { Vector2 } from "three";
import { useNormalTexture } from "@react-three/drei";
import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

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
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Textures: folder({
        "Normal Map": folder({
          normalAnisotropy: { label: "Anisotropy", step: 1, value: 8 },
          normalOffset: {
            label: "Offset",
            min: -1,
            max: 1,
            step: 0.01,
            value: { x: 0, y: 0 },
          },
          normalRepeat: {
            label: "Repeat",
            min: -2,
            max: 2,
            step: 0.01,
            value: { x: 1, y: 1 },
          },
          normalScale: { label: "Scale", value: 1 },
          normalTextureId: {
            label: "Texture ID", // https://github.com/emmelleppi/normal-maps/blob/master/normals.json
            min: 0,
            max: 75,
            step: 1,
            value: 8,
          },
        }),
      }),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );
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
