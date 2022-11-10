import { GroupProps } from "@react-three/fiber";

import { RapierPinballMachine as PinballMachine } from "Examples/Rapier/PinballMachine";
import { SceneRapierPinballLayout as Layout } from "Layouts/SceneRapierPinballLayout";

/**
 * Page for Rapier Pinball Machine.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const PhysicsRapierPinballMachinePage = (props: GroupProps): JSX.Element => {
  return (
    <Layout>
      <PinballMachine {...props} />
    </Layout>
  );
};

export { PhysicsRapierPinballMachinePage };
