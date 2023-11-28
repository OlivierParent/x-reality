import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Texture as TextureBakedNormals } from "Components/Texture/BakedNormals";
import { Texture as TextureDefault } from "Components/Texture/Default";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const TEXTURE = {
  Default: <TextureDefault />,
  BakedNormals: <TextureBakedNormals />,
} as const;

/**
 * Texture.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Texture = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { texture } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      texture: {
        label: "Type",
        options: {
          "Default      ": TEXTURE.Default,
          "Baked Normals": TEXTURE.BakedNormals,
        },
        value: TEXTURE.Default,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <group name="Texture" {...props}>
      {texture}
    </group>
  );
};

export { Texture };
