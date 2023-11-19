import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Examples/Rapier/World";
import { Layout } from "Layouts/SceneRapierFirstPersonLayout";

/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierWorldPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
    </Layout>
  );
};

export { PhysicsRapierWorldPage };
