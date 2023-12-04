import { GroupProps } from "@react-three/fiber";

import { TexturedMesh as TexturedMeshBakedNormals } from "Components/TexturedMesh/BakedNormals";
import { TexturedMesh as TexturedMeshDefault } from "Components/TexturedMesh/Default";
import { TexturedMesh as TexturedMeshVideo } from "Components/TexturedMesh/Video";
import { useLeva } from "Hooks/Leva/Texture";

const TEXTURE = {
  DEFAULT: <TexturedMeshDefault />,
  BAKED_NORMALS: <TexturedMeshBakedNormals />,
  VIDEO: <TexturedMeshVideo />,
} as const;

/**
 * Texture.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Texture = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { texturedMesh } = useLeva(TEXTURE);

  return (
    <group name="Texture" {...props}>
      {texturedMesh}
    </group>
  );
};

export { Texture };
