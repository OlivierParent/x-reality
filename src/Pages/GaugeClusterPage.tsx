import { GroupProps } from "@react-three/fiber";

import { GaugeCluster } from "Components/GaugeCluster";
import { Layout } from "Layouts/SceneLayout";

/**
 * Page for Gauge Cluster.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const GaugeClusterPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <GaugeCluster {...props} />
    </Layout>
  );
};

export { GaugeClusterPage };
