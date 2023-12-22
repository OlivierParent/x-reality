import { GroupProps } from "@react-three/fiber";

import { SpringAnimation } from "Components/SpringAnimation";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Spring-based Animation.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const SpringPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <SpringAnimation />
    </Layout>
  );
};

export default SpringPage;
