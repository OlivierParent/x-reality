import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";
import { DoubleSide, MathUtils } from "three";

const PLANE_SIZE = 10;

const CannonWorldFloor = () => {
  const args: [number, number] = [PLANE_SIZE, PLANE_SIZE];
  const mass = 0; // kg
  const rotation: [number, number, number] = [MathUtils.degToRad(-90), 0, 0];
  const [planeRef] = usePlane(() => ({
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
