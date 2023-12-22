import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils, Mesh } from "three";

/**
 * Stairs.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const CannonWorldStairs = (props: GroupProps): JSX.Element => {
  const angleSlope = 35;
  const angle = MathUtils.degToRad(-90 + angleSlope);
  const args: [number, number, number] = [1, 10, 0.2];
  const mass = 0; // kg
  const rotation: [number, number, number] = [angle, 0, 0];
  const [boxRef] = useBox(
    () => ({
      args,
      mass,
      rotation,
    }),
    useRef<Mesh>(null)
  );

  return (
    <group name="Stairs" {...props}>
      <Box args={args} ref={boxRef}>
        <meshBasicMaterial color={0x999999} opacity={0.25} transparent={true} />
      </Box>
    </group>
  );
};

export { CannonWorldStairs as Stairs };
