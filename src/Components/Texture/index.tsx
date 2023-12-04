import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Texture as TextureBakedNormals } from "Components/Texture/BakedNormals";
import { Texture as TextureDefault } from "Components/Texture/Default";
import { Texture as TextureVideo } from "Components/Texture/Video";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const TEXTURE = {
  Default: <TextureDefault />,
  BakedNormals: <TextureBakedNormals />,
  Video: <TextureVideo />,
} as const;

/**
 * Texture.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Texture = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { texturedMesh } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      texturedMesh: {
        label: "Type",
        options: {
          "Default      ": TEXTURE.Default,
          "Baked Normals": TEXTURE.BakedNormals,
          "Video        ": TEXTURE.Video,
        },
        value: TEXTURE.Default,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <group name="Texture" {...props}>
      {texturedMesh}
    </group>
  );
};

export { Texture };
