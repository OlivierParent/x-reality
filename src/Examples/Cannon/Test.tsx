import { useBox, useCylinder, usePlane, useSphere } from "@react-three/cannon";
import { Cone, Plane, RoundedBox, Sphere } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils, Mesh } from "three";

import { Material } from "Components/Material";

/**
 * Cannon-es physics engine test.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const CannonTest = (props: GroupProps): JSX.Element => {
  const [coneRef] = useCylinder<Mesh>(
    () => ({
      args: [0.001, 0.5, 1, 32],
      mass: 1,
      position: [0, 12, 0],
    }),
    useRef<Mesh>(null!)
  );

  const [planeRef] = usePlane(
    () => ({
      args: [10, 10],
      rotation: [-MathUtils.degToRad(90), 0, 0],
    }),
    useRef<Mesh>(null!)
  );

  const [roundedBoxRef] = useBox<Mesh>(
    () => ({
      args: [1, 1, 1],
      mass: 1,
      position: [-0.1, 8, 0],
    }),
    useRef<Mesh>(null!)
  );

  const [sphereRef] = useSphere<Mesh>(
    () => ({
      args: [0.5],
      mass: 20,
      position: [0.1, 4, 0],
    }),
    useRef<Mesh>(null!)
  );

  return (
    <group name="Cannon-es Test" {...props}>
      <group name="Floor">
        <Plane args={[10, 10]} ref={planeRef} receiveShadow={true}>
          <Material />
        </Plane>
      </group>
      <group name="Bodies">
        <Cone args={[0.5, 1]} castShadow={true} name="Cone" ref={coneRef}>
          <Material />
        </Cone>
        <RoundedBox
          args={[1, 1, 1]}
          castShadow={true}
          name="Rounded Box"
          ref={roundedBoxRef}
        >
          <Material />
        </RoundedBox>
        <Sphere
          args={[0.5, 32, 32]}
          castShadow={true}
          name="Sphere"
          ref={sphereRef}
        >
          <Material />
        </Sphere>
      </group>
    </group>
  );
};

export { CannonTest };
