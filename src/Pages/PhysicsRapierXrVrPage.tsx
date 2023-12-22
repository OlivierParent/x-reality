import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Examples/Rapier/World";
import { Layout } from "Layouts/SceneRapierFirstPersonXrVrLayout";

/**
 * Page for Rapier with XR: VR.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierXrVrPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
    </Layout>
  );
};

export default PhysicsRapierXrVrPage;
