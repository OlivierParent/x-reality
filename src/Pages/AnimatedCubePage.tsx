import { GroupProps } from "@react-three/fiber";

import { AnimatedCube } from "Components/AnimatedCube";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Animated Cube.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const AnimatedCubePage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <AnimatedCube {...props} />
    </Layout>
  );
};

export default AnimatedCubePage;
