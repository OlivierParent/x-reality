import { Plane, RoundedBox, Sphere } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { RigidBody } from "@react-three/rapier";

/**
 * Rapier physics engine test.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierTest = (props: GroupProps): JSX.Element => {
  return (
    <group name="Rapier Test" {...props}>
      <group name="Floor">
        <RigidBody type="fixed">
          <Plane args={[10, 10]} rotation={[MathUtils.degToRad(-90), 0, 0]}>
            <Material />
          </Plane>
        </RigidBody>
      </group>
      <group name="Objects">
        <RigidBody type="dynamic">
          <RoundedBox args={[1, 1, 1]} position={[-0.1, 10, 0]}>
            <Material />
          </RoundedBox>
        </RigidBody>
        <RigidBody colliders="ball" type="dynamic">
          <Sphere args={[0.5, 16, 16]} position={[0.1, 5, 0]}>
            <Material />
          </Sphere>
        </RigidBody>
      </group>
    </group>
  );
};

export { RapierTest };
