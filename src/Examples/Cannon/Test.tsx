import { useBox, usePlane, useSphere } from "@react-three/cannon";
import { Plane, RoundedBox, Sphere } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { MathUtils, Mesh } from "three";

import { Material } from "Components/Material";
import { useRef } from "react";

/**
 * Cannon-es physics engine test.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const CannonTest = (props: GroupProps): JSX.Element => {
  const [planeRef] = usePlane(
    () => ({
      args: [10, 10],
      rotation: [MathUtils.degToRad(-90), 0, 0],
    }),
    useRef<Mesh>(null)
  );

  const [roundedBoxRef] = useBox<Mesh>(
    () => ({
      args: [1, 1, 1],
      mass: 1, //
      position: [-0.1, 10, 0],
    }),
    useRef<Mesh>(null)
  );
  const [sphereRef] = useSphere<Mesh>(
    () => ({
      args: [0.5],
      mass: 1,
      position: [0.1, 5, 0],
    }),
    useRef<Mesh>(null)
  );

  return (
    <group name="Cannon-es Test" {...props}>
      <group name="Floor">
        <Plane args={[10, 10]} ref={planeRef}>
          <Material />
        </Plane>
      </group>
      <group name="Objects">
        <RoundedBox args={[1, 1, 1]} ref={roundedBoxRef}>
          <Material />
        </RoundedBox>
        <Sphere args={[0.5, 16, 16]} ref={sphereRef}>
          <Material />
        </Sphere>
      </group>
    </group>
  );
};

export { CannonTest };
