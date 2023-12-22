import { GroupProps } from "@react-three/fiber";

import { Geometry2D } from "Components/Geometry2D";
import { Material } from "Components/Material";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for 2D Geometry.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Geometry2dPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Geometry2D {...props}>
        <Material />
      </Geometry2D>
    </Layout>
  );
};

export default Geometry2dPage;
