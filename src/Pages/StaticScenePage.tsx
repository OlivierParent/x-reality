import { GroupProps } from "@react-three/fiber";

import { StaticScene } from "Examples/StaticScene";
import { Layout } from "Layouts/SceneLayoutStatic";

/**
 * Page for Animated Cube.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const StaticScenePage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <StaticScene />
    </Layout>
  );
};

export default StaticScenePage;
