import { GroupProps } from "@react-three/fiber";

import { AnimatedCube } from "Components/AnimatedCube";
import { SceneLayout as Layout } from "Layouts/SceneLayout";

/**
 * Page for Animated Cube.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const AnimatedCubePage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <AnimatedCube {...props} />
    </Layout>
  );
};

export { AnimatedCubePage };
