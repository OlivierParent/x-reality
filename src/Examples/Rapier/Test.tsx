import { Cone, Plane, RoundedBox, Sphere } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { ConeCollider, RigidBody } from "@react-three/rapier";
import { MathUtils } from "three";

import { Material } from "Components/Material";

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
          <Plane
            args={[20, 20]}
            rotation={[MathUtils.degToRad(-90), 0, 0]}
            receiveShadow={true}
          >
            <Material />
          </Plane>
        </RigidBody>
      </group>
      <group name="Bodies">
        <RigidBody
          colliders={false}
          mass={2}
          name="Cone"
          position={[0, 12, 0]}
          type="dynamic"
        >
          <ConeCollider args={[0.5, 0.5]}>
            <Cone args={[0.5, 1]} castShadow={true}>
              <Material />
            </Cone>
          </ConeCollider>
        </RigidBody>
        <RigidBody
          mass={1}
          name="Rounded Box"
          position={[-0.1, 8, 0]}
          type="dynamic"
        >
          <RoundedBox args={[1, 1, 1]} castShadow={true}>
            <Material />
          </RoundedBox>
        </RigidBody>
        <RigidBody
          colliders="ball"
          mass={20}
          name="Sphere"
          position={[0.1, 4, 0]}
          type="dynamic"
        >
          <Sphere args={[0.5, 32, 32]} castShadow={true}>
            <Material />
          </Sphere>
        </RigidBody>
      </group>
    </group>
  );
};

export { RapierTest };
