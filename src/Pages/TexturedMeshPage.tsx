import { GroupProps } from "@react-three/fiber";

import { Texture } from "Components/TexturedMesh";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Textured Mesh.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const TexturedMeshPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Texture {...props} />
    </Layout>
  );
};

export default TexturedMeshPage;
