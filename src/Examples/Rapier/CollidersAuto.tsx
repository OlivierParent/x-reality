import { Html } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody, RigidBodyAutoCollider } from "@react-three/rapier";

import { Suzanne } from "Components/Suzanne";

import styles from "Styles/labels.module.css";

const SIZE = 0.5;
const colliders: Array<RigidBodyAutoCollider | undefined> = [
  "ball",
  "cuboid",
  "hull",
  "trimesh",
];

/**
 * Rapier auto-colliders demo.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierCollidersAuto = (props: GroupProps): JSX.Element => {
  return (
    <group {...props}>
      {colliders.map(
        (collider: RigidBodyAutoCollider | undefined, index: number) => (
          <RigidBody
            colliders={collider}
            key={`auto-collider-${index}`}
            position={[4 * SIZE * (index - (colliders.length - 1) / 2), 0, 0]}
            type="fixed"
          >
            <Suzanne scale={[SIZE, SIZE, SIZE]} />
            <Html className={styles["label"]} position={[0, -2 * SIZE, 0]}>
              {collider}
            </Html>
          </RigidBody>
        )
      )}
    </group>
  );
};

export { RapierCollidersAuto };
