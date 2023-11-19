import { GroupProps } from "@react-three/fiber";

import { Colliders } from "Examples/Rapier/Colliders/Manual";
import { Layout } from "Layouts/SceneRapierLayout";

/**
 * Page for Rapier Colliders Manual.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierCollidersManualPage = (
  props: GroupProps
): React.JSX.Element => {
  return (
    <Layout>
      <Colliders {...props} />
    </Layout>
  );
};

export { PhysicsRapierCollidersManualPage };
