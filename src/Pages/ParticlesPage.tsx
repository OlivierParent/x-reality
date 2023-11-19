import { GroupProps } from "@react-three/fiber";

import { Particles } from "Components/Particles";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Particles.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ParticlesPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Particles {...props} />
    </Layout>
  );
};

export { ParticlesPage };
