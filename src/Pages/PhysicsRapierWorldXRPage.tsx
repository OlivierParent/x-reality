import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Examples/Rapier/World";
import { Layout } from "Layouts/SceneRapierFirstPersonXRLayout";

/**
 * Page for Rapier World.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierWorldXRPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
    </Layout>
  );
};

export { PhysicsRapierWorldXRPage };
