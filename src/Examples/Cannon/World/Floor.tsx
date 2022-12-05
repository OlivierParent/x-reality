import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";
import { DoubleSide, MathUtils } from "three";

const PLANE_SIZE = 10;

const CannonWorldFloor = (props: any) => {
  const args = [PLANE_SIZE, PLANE_SIZE] as [number, number];
  const mass = 0; // kg
  const rotation = [MathUtils.degToRad(-90), 0, 0];
  const [planeRef] = usePlane(() => ({
    ...props,
    mass,
    rotation,
  }));

  return (
    <Plane args={args} ref={planeRef}>
      <meshBasicMaterial color={0x666666} side={DoubleSide} />
    </Plane>
  );
};

export { CannonWorldFloor };
