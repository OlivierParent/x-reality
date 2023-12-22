import { GroupProps } from "@react-three/fiber";

import { Texture } from "Components/TexturedMesh";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Textured Mesh.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const TexturedMeshPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Texture {...props} />
    </Layout>
  );
};

export default TexturedMeshPage;
