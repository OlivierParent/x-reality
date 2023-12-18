import { GroupProps } from "@react-three/fiber";

import { SuzanneExports } from "Components/Suzanne/Exports";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for SuzanneExports.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const SuzanneExportsPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <SuzanneExports {...props} />
    </Layout>
  );
};

export default SuzanneExportsPage;
