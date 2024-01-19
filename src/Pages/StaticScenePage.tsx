import { GroupProps } from "@react-three/fiber";

import { StaticScene } from "Examples/StaticScene";
import { Layout } from "Layouts/SceneLayoutStatic";

/**
 * Page for a static scene.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const StaticScenePage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <StaticScene />
    </Layout>
  );
};

export default StaticScenePage;
