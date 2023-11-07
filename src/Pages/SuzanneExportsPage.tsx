import { GroupProps } from "@react-three/fiber";

import { SuzanneExports } from "Components/Suzanne/Exports";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for SuzanneExports.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const SuzanneExportsPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <SuzanneExports {...props} />
    </Layout>
  );
};

export { SuzanneExportsPage };
