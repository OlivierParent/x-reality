import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, MathUtils, Mesh } from "three";

const PLANE_SIZE = 100;

/**
 * Floor.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const CannonWorldFloor = (props: GroupProps): React.JSX.Element => {
  const args: [number, number] = [PLANE_SIZE, PLANE_SIZE];
  const mass = 0; // kg
  const rotation: [number, number, number] = [MathUtils.degToRad(-90), 0, 0];
  const [planeRef] = usePlane(
    () => ({
      mass,
      rotation,
    }),
    useRef<Mesh>(null)
  );

  return (
    <group name="Floor" {...props}>
      <Plane args={args} ref={planeRef}>
        <meshBasicMaterial color={0x666666} side={DoubleSide} />
      </Plane>
    </group>
  );
};

export { CannonWorldFloor as Floor };
