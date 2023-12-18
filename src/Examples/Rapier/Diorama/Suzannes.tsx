import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

import { Suzanne } from "Components/Suzanne";

const SIZE = 0.5;
const SUZANNES = 100;

/**
 * Suzannes.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierDioramaSuzannes = (props: GroupProps): React.JSX.Element => {
  return (
    <group name="Floor" {...props}>
      {Array(SUZANNES)
        .fill(0)
        .map((_, index) => (
          <RigidBody
            colliders="hull"
            key={`suzanne-${index}`}
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
