import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

import { Suzanne } from "Components/Suzanne";

const SIZE = 0.5;

/**
 * Suzannes.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierDioramaSuzannes = (props: GroupProps): React.JSX.Element => {
  return (
    <group name="Floor" {...props}>
      {new Array(100).fill(0).map((_, index) => (
        <RigidBody
          colliders="hull"
          position={[
            SIZE * Math.random(),
            SIZE * 2 * index,
            SIZE * Math.random(),
          ]}
        >
          <Suzanne scale={SIZE} />
        </RigidBody>
      ))}
    </group>
  );
};

export { RapierDioramaSuzannes as Suzannes };
