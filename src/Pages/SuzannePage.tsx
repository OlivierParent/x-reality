import { GroupProps } from "@react-three/fiber";

import { Suzanne } from "Components/Suzanne";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Suzanne.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const SuzannePage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Suzanne {...props} />
    </Layout>
  );
};

export { SuzannePage };
