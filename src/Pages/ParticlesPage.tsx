import { GroupProps } from "@react-three/fiber";

import { Particles } from "Components/Particles";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Particles.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const ParticlesPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Particles {...props} />
    </Layout>
  );
};

export { ParticlesPage };
