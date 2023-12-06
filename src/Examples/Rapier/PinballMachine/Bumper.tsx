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
 * @returns {React.JSX.Element}
 */
const RapierPinballMachineBumper = (props: BumperProps): React.JSX.Element => {
  const { position = new Vector3(0, 0, 0) } = props;

  // References.
  const bumperRef = useRef<MeshBasicMaterial>(null!);

  // Event handlers.
  const collisionEnterHandler = () => {
    bumperRef.current.color.set("green");
  };
  const collisionExitHandler = () => {
    setTimeout(() => {
      bumperRef.current.color.set("yellow");
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
        restitution={2.5}
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
            color={"yellow"}
            opacity={0.5}
            transparent={true}
            ref={bumperRef}
          />
        </Cylinder>
      </RigidBody>
    </group>
  );
};

export { RapierPinballMachineBumper as Bumper };
