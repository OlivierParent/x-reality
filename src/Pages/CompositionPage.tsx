import { GroupProps } from "@react-three/fiber";

import { Composition } from "Components/Composition";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Composition.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const CompositionPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Composition {...props} />
    </Layout>
  );
};

export default CompositionPage;
