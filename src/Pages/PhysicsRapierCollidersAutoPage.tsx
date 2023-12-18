import { GroupProps } from "@react-three/fiber";

import { Colliders } from "Examples/Rapier/Colliders/Auto";
import { Layout } from "Layouts/SceneRapierLayout";

/**
 * Page for Rapier Colliders Auto.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierCollidersAutoPage = (
  props: GroupProps
): React.JSX.Element => {
  return (
    <Layout>
      <Colliders {...props} />
    </Layout>
  );
};

export default PhysicsRapierCollidersAutoPage;
