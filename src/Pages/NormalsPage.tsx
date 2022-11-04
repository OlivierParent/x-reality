import { GroupProps } from "@react-three/fiber";

import { Normals } from "Components/Normals";
import { SceneLayout as Layout } from "Layouts/SceneLayout";

/**
 * Page for Normals.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const NormalsPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Normals {...props} />
    </Layout>
  );
};

export { NormalsPage };
