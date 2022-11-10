import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";
import { MathUtils } from "three";

const CannonWorldStairs = (props: any) => {
  const angleSlope = 35;
  const angle = MathUtils.degToRad(-90 + angleSlope);
  const args = [1, 10, 0.2] as [number, number, number];
  const mass = 0; // kg
  const rotation = [angle, 0, 0];
  const [ref] = useBox(() => ({
    ...props,
    args,
    mass,
    rotation,
  }));

  return (
    <Box args={args} ref={ref}>
      <meshBasicMaterial color={0x999999} opacity={0.25} transparent={true} />
    </Box>
  );
};

export { CannonWorldStairs };
