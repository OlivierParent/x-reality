import { GroupProps } from "@react-three/fiber";

import { RapierDiorama } from "Examples/Rapier/Diorama";
import { Layout } from "Layouts/SceneRapierDioramaLayout";

/**
 * Page for Rapier Diorama.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierDioramaPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <RapierDiorama {...props} />
    </Layout>
  );
};

export default PhysicsRapierDioramaPage;
