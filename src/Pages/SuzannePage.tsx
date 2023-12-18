import { GroupProps } from "@react-three/fiber";

import { Suzanne } from "Components/Suzanne";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Suzanne.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const SuzannePage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Suzanne {...props} />
    </Layout>
  );
};

export default SuzannePage;
