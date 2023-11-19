import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

/**
 * Pinball machine cabinet walls.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachineCabinetWalls = (
  props: GroupProps
): React.JSX.Element => {
  return (
    <group name="Cabinet Walls" {...props}>
      <RigidBody restitution={3} type="fixed">
        <Box args={[10, 0.25, 0.25]} position={new Vector3(0, 0.125, -14)}>
          <meshBasicMaterial color={0xaaaaaa} />
        </Box>
        <Box args={[0.25, 0.25, 16]} position={new Vector3(-5, 0.125, -6)}>
          <meshBasicMaterial color={0xaaaaaa} />
        </Box>
        <Box args={[0.25, 0.25, 16]} position={new Vector3(5, 0.125, -6)}>
          <meshBasicMaterial color={0xaaaaaa} />
        </Box>
      </RigidBody>
    </group>
  );
};

export { RapierPinballMachineCabinetWalls as CabinetWalls };
