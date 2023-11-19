import { Cylinder } from "@react-three/drei";
import {
  CylinderCollider,
  interactionGroups,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import { MeshBasicMaterial, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";

type KickerProps = {
  position: Vector3;
};

const KICKER = {
  HEIGHT: 0.25,
  RADIUS: {
    BOTTOM: 0.1,
    TOP: 0.2,
  },
} as const;

/**
 * Pinball machine kicker.
 *
 * @todo convert to kicker
 * @param {KickerProps} props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachineKicker = (props: KickerProps): React.JSX.Element => {
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
    <group name="Kicker" position={position}>
      <RigidBody
        colliders={false}
        position={new Vector3(0, KICKER.HEIGHT / 2, 0)}
        restitution={2.5}
        type="fixed"
      >
        <CylinderCollider
          args={[
            KICKER.HEIGHT / 2,
            (KICKER.RADIUS.BOTTOM + KICKER.RADIUS.TOP) / 2,
          ]}
          collisionGroups={interactionGroups(INTERACTION.KICKER, [
            INTERACTION.BALL,
          ])}
          onCollisionEnter={collisionEnterHandler}
          onCollisionExit={collisionExitHandler}
        />
        <Cylinder
          args={[KICKER.RADIUS.TOP, KICKER.RADIUS.BOTTOM, KICKER.HEIGHT]}
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

export { RapierPinballMachineKicker as Kicker };
