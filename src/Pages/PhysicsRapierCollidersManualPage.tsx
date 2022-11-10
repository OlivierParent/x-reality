import { GroupProps } from "@react-three/fiber";

import { RapierCollidersManual } from "Examples/Rapier/CollidersManual";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";

/**
 * Page for Rapier Colliders Manual.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierCollidersManualPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierCollidersManual {...props} />
    </Layout>
  );
};

export { PhysicsRapierCollidersManualPage };
