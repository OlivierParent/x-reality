import { GroupProps } from "@react-three/fiber";

import { CannonTest } from "Examples/Cannon/Test";
import { SceneCannonLayout as Layout } from "Layouts/SceneCannonLayout";

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

export { PhysicsCannonTestPage };
