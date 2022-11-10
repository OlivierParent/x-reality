import { GroupProps } from "@react-three/fiber";

import { RapierCollidersAuto } from "Examples/Rapier/CollidersAuto";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";

/**
 * Page for Rapier Colliders Auto.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierCollidersAutoPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierCollidersAuto {...props} />
    </Layout>
  );
};

export { PhysicsRapierCollidersAutoPage };
