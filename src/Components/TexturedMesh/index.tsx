import { GroupProps } from "@react-three/fiber";

import { TexturedMesh as TexturedMeshBakedNormals } from "Components/TexturedMesh/BakedNormals";
import { TexturedMesh as TexturedMeshDefault } from "Components/TexturedMesh/Default";
import { TexturedMesh as TexturedMeshVideo } from "Components/TexturedMesh/Video";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Texture";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DEFAULT]: <TexturedMeshDefault />,
  [LEVA_OPTION.BAKED_NORMALS]: <TexturedMeshBakedNormals />,
  [LEVA_OPTION.VIDEO]: <TexturedMeshVideo />,
} as const;

/**
 * Texture.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Texture = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { texturedMesh } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.DEFAULT]
  );

  return (
    <group name="Texture" {...props}>
      {texturedMesh}
    </group>
  );
};

export { Texture };
