import { RigidBody } from "@react-three/rapier";
import { Box } from "@react-three/drei";
import { Euler, MathUtils } from "three";

const RapierWorldStairs = () => {
  const angleSlope = 35;
  const angle = MathUtils.degToRad(-90 + angleSlope);
  const args: [number, number, number] = [1, 10, 0.2];
  const rotation = new Euler(angle, 0, 0);

  return (
    <RigidBody type="fixed">
      <Box args={args} rotation={rotation}>
        <meshBasicMaterial color={0x999999} opacity={0.25} transparent={true} />
      </Box>
    </RigidBody>
  );
};

export { RapierWorldStairs };
