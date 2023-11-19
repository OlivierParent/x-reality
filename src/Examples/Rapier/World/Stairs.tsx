import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Euler, MathUtils } from "three";

/**
 * Stairs.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierWorldStairs = (props: GroupProps): React.JSX.Element => {
  const angleSlope = 35;
  const angle = MathUtils.degToRad(-90 + angleSlope);
  const args: [number, number, number] = [1, 10, 0.2];
  const rotation = new Euler(angle, 0, 0);

  return (
    <group name="Stairs" {...props}>
      <RigidBody type="fixed">
        <Box args={args} rotation={rotation}>
          <meshBasicMaterial
            color={0x999999}
            opacity={0.25}
            transparent={true}
          />
        </Box>
      </RigidBody>
    </group>
  );
};

export { RapierWorldStairs as Stairs };
