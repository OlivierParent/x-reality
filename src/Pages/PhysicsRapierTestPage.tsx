import { GroupProps } from "@react-three/fiber";

import { RapierTest } from "Examples/Rapier/Test";
import { Layout } from "Layouts/SceneRapierPoseLayout";

/**
 * Page for Rapier Test.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierTestPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <RapierTest {...props} />
    </Layout>
  );
};

export { PhysicsRapierTestPage };
