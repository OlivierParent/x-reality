import { Box, Plane } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { DoubleSide, Euler, MathUtils } from "three";

const PLANE_SIZE = 5;

/**
 * Floor.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierDioramaFloor = (props: GroupProps): React.JSX.Element => {
  const args: [number, number] = [PLANE_SIZE, PLANE_SIZE];
  const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);

  return (
    <group name="Floor" {...props}>
      <RigidBody ccd={true} type="fixed">
        <Box //
          args={args}
          receiveShadow={true}
          rotation={rotation}
        >
          <meshStandardMaterial color={0x666666} side={DoubleSide} />
        </Box>
        <Plane //
          args={[100, 100]}
          receiveShadow={true}
          rotation={rotation}
        >
          <meshBasicMaterial visible={false} />
        </Plane>
      </RigidBody>
    </group>
  );
};

export { RapierDioramaFloor as Floor };
