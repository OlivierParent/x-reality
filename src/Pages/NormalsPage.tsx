import { GroupProps } from "@react-three/fiber";

import { Normals } from "Components/Normals";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Normals.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const NormalsPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Normals {...props} />
    </Layout>
  );
};

export { NormalsPage };
