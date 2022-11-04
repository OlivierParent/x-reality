import { GroupProps } from "@react-three/fiber";

import { Lipsum } from "Components/Lipsum";
import { SceneLayout as Layout } from "Layouts/SceneLayout";

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

export { LipsumPage };
