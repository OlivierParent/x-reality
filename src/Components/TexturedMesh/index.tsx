import { GroupProps } from "@react-three/fiber";

import { TexturedMesh as TexturedMeshBakedNormals } from "Components/TexturedMesh/BakedNormals";
import { TexturedMesh as TexturedMeshDefault } from "Components/TexturedMesh/Default";
import { TexturedMesh as TexturedMeshVideo } from "Components/TexturedMesh/Video";
import { useLeva } from "Hooks/Leva/Texture";

const LEVA_OPTIONS = {
  "\u2014Default\u2014": <TexturedMeshDefault />,
  "Baked Normals": <TexturedMeshBakedNormals />,
  "Video\u0000": <TexturedMeshVideo />,
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
    LEVA_OPTIONS["\u2014Default\u2014"]
  );

  return (
    <group name="Texture" {...props}>
      {texturedMesh}
    </group>
  );
};

export { Texture };
