import { GroupProps } from "@react-three/fiber";

import { Calendar } from "Components/Calendar";
import { Layout } from "Layouts/SceneLayoutFrameloopDemand";

/**
 * Page for Calendar.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const CalendarPage = (props: GroupProps): React.JSX.Element => {
  return (
    <Layout>
      <Calendar {...props} />
    </Layout>
  );
};

export { CalendarPage };
