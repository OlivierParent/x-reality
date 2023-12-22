import { GroupProps } from "@react-three/fiber";

import { Animation } from "Components/Animation";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Animation.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const AnimationPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Animation {...props} />
    </Layout>
  );
};

export default AnimationPage;
