import { GroupProps } from "@react-three/fiber";

import { Spring } from "Components/Spring";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Spring.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const SpringPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Spring />
    </Layout>
  );
};

export default SpringPage;
