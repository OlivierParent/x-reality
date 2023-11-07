import { Plane } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { DoubleSide, Euler, MathUtils } from "three";

const PLANE_SIZE = 10;

/**
 * Floor.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierWorldFloor = (props: GroupProps): JSX.Element => {
  const args: [number, number] = [PLANE_SIZE, PLANE_SIZE];
  const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);

  return (
    <group name="Floor" {...props}>
      <RigidBody>
        <Plane args={args} rotation={rotation}>
          <meshBasicMaterial color={0x666666} side={DoubleSide} />
        </Plane>
      </RigidBody>
    </group>
  );
};

export { RapierWorldFloor as Floor };
