import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Examples/Rapier/World";
import { Layout } from "Layouts/SceneRapierFirstPersonXrArLayout";

/**
 * Page for Rapier with XR: VR.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const PhysicsRapierXrVrPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
    </Layout>
  );
};

export { PhysicsRapierXrVrPage };
