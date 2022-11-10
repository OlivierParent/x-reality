import { Plane } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { DoubleSide, Euler, MathUtils } from "three";

const PLANE_SIZE = 10;

const RapierWorldFloor = (props: any) => {
  const args = [PLANE_SIZE, PLANE_SIZE] as [number, number];
  const mass = 0; // kg
  const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);
  // const [ref] = usePlane(() => ({
  //   ...props,
  //   mass,
  //   rotation,
  // }));

  return (
    <RigidBody>
      <Plane args={args} rotation={rotation}>
        <meshBasicMaterial color={0x666666} side={DoubleSide} />
      </Plane>
    </RigidBody>
  );
};

export { RapierWorldFloor };
