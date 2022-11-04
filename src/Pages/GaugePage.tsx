import { GroupProps } from "@react-three/fiber";

import { Gauge } from "Components/Gauge";
import { SceneLayout as Layout } from "Layouts/SceneLayout";

/**
 * Page for Gauge.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const GaugePage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Gauge {...props} />
    </Layout>
  );
};

export { GaugePage };
