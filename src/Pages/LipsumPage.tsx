import { GroupProps } from "@react-three/fiber";

import { Lipsum } from "Components/Lipsum";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Lipsum.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const LipsumPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Lipsum {...props} />
    </Layout>
  );
};

export default LipsumPage;
