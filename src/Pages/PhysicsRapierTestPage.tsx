import { GroupProps } from "@react-three/fiber";

import { RapierTest } from "Examples/Rapier/Test";
import { SceneRapierLayout as Layout } from "Layouts/SceneRapierLayout";

/**
 * Page for Rapier Test.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierTestPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierTest {...props} />
    </Layout>
  );
};

export { PhysicsRapierTestPage };
