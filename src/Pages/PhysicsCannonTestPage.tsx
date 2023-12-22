import { GroupProps } from "@react-three/fiber";

import { CannonTest } from "Examples/Cannon/Test";
import { Layout } from "Layouts/SceneCannonPoseLayout";

/**
 * Page for Cannon-es Test.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsCannonTestPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <CannonTest {...props} />
    </Layout>
  );
};

export default PhysicsCannonTestPage;
