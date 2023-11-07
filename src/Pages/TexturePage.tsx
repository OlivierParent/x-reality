import { GroupProps } from "@react-three/fiber";

import { Texture } from "Components/Texture";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Texture.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const TexturePage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Texture {...props} />
    </Layout>
  );
};

export { TexturePage };
