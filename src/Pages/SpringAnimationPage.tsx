import { GroupProps } from "@react-three/fiber";

import { SpringAnimation } from "Components/SpringAnimation";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Spring-based Animation.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const SpringPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <SpringAnimation />
    </Layout>
  );
};

export default SpringPage;
