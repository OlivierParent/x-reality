import { Html } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import {
  BallArgs,
  BallCollider,
  CapsuleArgs,
  CapsuleCollider,
  ConeArgs,
  ConeCollider,
  CuboidArgs,
  CuboidCollider,
  CylinderArgs,
  CylinderCollider,
  RigidBody,
  RoundCuboidArgs,
  RoundCuboidCollider,
} from "@react-three/rapier";

import styles from "Styles/labels.module.css";

const SIZE = 0.25;
const colliders: Array<any> = [
  {
    collider: <BallCollider args={[SIZE] as BallArgs} />,
    name: "ball",
  },
  {
    collider: <CapsuleCollider args={[SIZE, SIZE] as CapsuleArgs} />,
    name: "capsule",
  },
  {
    collider: <ConeCollider args={[SIZE, SIZE] as ConeArgs} />,
    name: "cone",
  },
  {
    collider: <CuboidCollider args={[SIZE, SIZE, SIZE] as CuboidArgs} />,
    name: "cuboid",
  },
  {
    collider: <CylinderCollider args={[SIZE, SIZE] as CylinderArgs} />,
    name: "cylinder",
  },
  {
    collider: (
      <RoundCuboidCollider
        args={[SIZE, SIZE, SIZE, SIZE / 10] as RoundCuboidArgs}
      />
    ),
    name: "round cuboid",
  },
];

/**
 * Rapier manual colliders demo.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierCollidersManual = (props: GroupProps): JSX.Element => {
  return (
    <group name="Rapier Manual Colliders" {...props}>
      {colliders.map(({ collider, name }, index: number) => (
        <RigidBody
          colliders={false}
          key={`manual-collider-${index}`}
          position={[4 * SIZE * (index - (colliders.length - 1) / 2), 0, 0]}
          type="fixed"
        >
          {collider}
          <Html className={styles["label"]} position={[0, -2 * SIZE, 0]}>
            {name}
          </Html>
        </RigidBody>
      ))}
    </group>
  );
};

export { RapierCollidersManual as Colliders };
