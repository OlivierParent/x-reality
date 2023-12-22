import { GroupProps } from "@react-three/fiber";

import { Geometry3D } from "Components/Geometry3D";
import { Material } from "Components/Material";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for 3D Geometry.
 *
 * @returns {JSX.Element}
 */
const Geometry3dPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Geometry3D {...props}>
        <Material />
      </Geometry3D>
    </Layout>
  );
};

export default Geometry3dPage;
