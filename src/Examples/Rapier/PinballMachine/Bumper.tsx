import { Cylinder } from "@react-three/drei";
import {
  CylinderCollider,
  interactionGroups,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import { MeshBasicMaterial, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";

type BumperProps = {
  position: Vector3;
};

const BUMPER = {
  COLOR: {
    ACTIVE: "green",
    INACTIVE: "yellow",
  },
  HEIGHT: 0.25,
  RADIUS: {
    BOTTOM: 0.1,
    TOP: 0.2,
  },
} as const;

/**
 * Pinball machine bumper.
 *
 * @param {BumperProps} props
 * @returns {JSX.Element}
 */
const RapierPinballMachineBumper = (props: BumperProps): JSX.Element => {
  const { position = new Vector3(0, 0, 0) } = props;

  // References.
  const bumperRef = useRef<MeshBasicMaterial>(null!);

  // Event handlers.
  const collisionEnterHandler = () => {
    bumperRef.current.color.set(BUMPER.COLOR.ACTIVE);
  };
  const collisionExitHandler = () => {
    setTimeout(() => {
      bumperRef.current.color.set(BUMPER.COLOR.INACTIVE);
    }, 500);
  };

  return (
    <group name="Bumper" position={position}>
      <RigidBody
        colliders={false}
        position={
          new Vector3(
            0, //
            BUMPER.HEIGHT / 2,
            0
          )
        }
        restitution={2}
        type="fixed"
      >
        <CylinderCollider
          args={[
            BUMPER.HEIGHT / 2,
            (BUMPER.RADIUS.BOTTOM + BUMPER.RADIUS.TOP) / 2,
          ]}
          onCollisionEnter={collisionEnterHandler}
          onCollisionExit={collisionExitHandler}
          collisionGroups={interactionGroups(
            INTERACTION.BUMPER,
            INTERACTION.BALL
          )}
          solverGroups={interactionGroups(
            INTERACTION.BUMPER, //
            INTERACTION.BALL
          )}
        />
        <Cylinder
          args={[
            BUMPER.RADIUS.TOP, //
            BUMPER.RADIUS.BOTTOM,
            BUMPER.HEIGHT,
          ]}
        >
          <meshBasicMaterial
            color={BUMPER.COLOR.INACTIVE}
            opacity={0.5}
            ref={bumperRef}
            transparent={true}
          />
        </Cylinder>
      </RigidBody>
    </group>
  );
};

export { RapierPinballMachineBumper as Bumper };
