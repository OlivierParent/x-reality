import { GroupProps } from "@react-three/fiber";

import { Tripod } from "Components/Tripod";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Tripod.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const TripodPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Tripod {...props} />
    </Layout>
  );
};

export default TripodPage;
