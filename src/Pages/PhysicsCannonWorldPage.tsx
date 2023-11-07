import { GroupProps } from "@react-three/fiber";

import { CannonWorld } from "Examples/Cannon/World";
import { Layout } from "Layouts/SceneCannonFirstPersonLayout";

/**
 * Page for Cannon-es World.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsCannonWorldPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <CannonWorld {...props} />
    </Layout>
  );
};

export { PhysicsCannonWorldPage };
