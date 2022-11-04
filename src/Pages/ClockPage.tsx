import { GroupProps } from "@react-three/fiber";

import { Clock } from "Components/Clock";
import { SceneLayout as Layout } from "Layouts/SceneLayout";

/**
 * Page for Clock.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const ClockPage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <Clock {...props} />
    </Layout>
  );
};

export { ClockPage };
