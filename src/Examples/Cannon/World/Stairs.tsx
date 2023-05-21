import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";
import { useRef } from "react";
import { MathUtils, Mesh } from "three";

const CannonWorldStairs = () => {
  const angleSlope = 35;
  const angle = MathUtils.degToRad(-90 + angleSlope);
  const args: [number, number, number] = [1, 10, 0.2];
  const mass = 0; // kg
  const rotation: [number, number, number] = [angle, 0, 0];
  const [ref] = useBox(
    () => ({
      args,
      mass,
      rotation,
    }),
    useRef<Mesh>(null)
  );

  return (
    <Box args={args} ref={ref}>
      <meshBasicMaterial color={0x999999} opacity={0.25} transparent={true} />
    </Box>
  );
};

export { CannonWorldStairs };
