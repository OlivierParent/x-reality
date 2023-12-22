import { GroupProps } from "@react-three/fiber";

import { RapierWorld } from "Examples/Rapier/World";
import { Layout } from "Layouts/SceneRapierFirstPersonXrArLayout";

/**
 * Page for Rapier with XR: AR.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierXrArPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierWorld {...props} />
    </Layout>
  );
};

export default PhysicsRapierXrArPage;
