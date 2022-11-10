import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Examples/Rapier/World";
import { SceneRapierFirstPersonLayout as Layout } from "Layouts/SceneRapierFirstPersonLayout";

/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierWorldPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
    </Layout>
  );
};

export { PhysicsRapierWorldPage };
