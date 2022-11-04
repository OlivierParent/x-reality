import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { TextureBakedNormals as BakedNormals } from "Components/Texture/BakedNormals";
import { TextureDefault as Default } from "Components/Texture/Default";

const TEXTURE = Object.freeze({
  Default: "Default",
  BakedNormals: "BakedNormals",
});

const Texture = (props: GroupProps) => {
  const { useTexture } = useControls("Components", {
    useTexture: {
      label: "Type",
      options: {
        "Default      ": TEXTURE.Default,
        "Baked Normals": TEXTURE.BakedNormals,
      },
      value: TEXTURE.Default,
    },
  });

  function enableTexture(name: string, element: JSX.Element) {
    return useTexture === name ? element : null;
  }

  return (
    <group name="Textures" {...props}>
      {enableTexture(TEXTURE.Default, <Default />)}
      {enableTexture(TEXTURE.BakedNormals, <BakedNormals />)}
    </group>
  );
};

export { Texture };
