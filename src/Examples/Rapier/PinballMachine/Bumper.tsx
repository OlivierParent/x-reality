import { Cylinder } from "@react-three/drei";
import {
  CylinderCollider,
  interactionGroups,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import { MeshBasicMaterial, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";
import { BUMPER } from "Examples/Rapier/PinballMachine/Bumper.config";

type BumperProps = {
  position: Vector3;
};

const positionVector = new Vector3(
  0, //
  BUMPER.HEIGHT / 2,
  0
);

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
        position={positionVector}
        restitution={BUMPER.PHYSICS.RESTITUTION}
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
