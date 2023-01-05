import { GroupProps } from "@react-three/fiber";

import { GaugeCluster } from "Components/GaugeCluster";
import { SceneLayout as Layout } from "Layouts/SceneLayout";

/**
 * Page for Gauge Cluster.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const GaugeClusterPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <GaugeCluster {...props} />
    </Layout>
  );
};

export { GaugeClusterPage };
