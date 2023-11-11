import { Cylinder } from "@react-three/drei";
import {
  CylinderCollider,
  interactionGroups,
  RigidBody,
} from "@react-three/rapier";
import { useRef } from "react";
import { Color, MeshBasicMaterial, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";

type BumperProps = {
  position: Vector3;
};
const radiusBottom = 0.1;
const radiusTop = 0.2;
const height = 0.25;

/**
 * Pinball machine bumper.
 *
 * @param {BumperProps} props
 * @returns {JSX.Element}
 */
const RapierPinballMachineBumper = (props: BumperProps): JSX.Element => {
  const { position = new Vector3(0, 0, 0) } = props;

  // References.
  const bumperRef = useRef<MeshBasicMaterial>(null);

  return (
    <group name="Bumper" position={position}>
      <RigidBody
        colliders={false}
        position={new Vector3(0, height / 2, 0)}
        restitution={2.5}
        type="fixed"
      >
        <CylinderCollider
          args={[height / 2, (radiusBottom + radiusTop) / 2]}
          onCollisionEnter={() => {
            bumperRef.current!.color = new Color(0x00ff00);
          }}
          onCollisionExit={() => {
            setTimeout(() => {
              bumperRef.current!.color = new Color("yellow");
            }, 500);
          }}
          collisionGroups={interactionGroups(
            INTERACTION.BUMPER,
            INTERACTION.BALL
          )}
          solverGroups={interactionGroups(INTERACTION.BUMPER, INTERACTION.BALL)}
        />
        <Cylinder args={[radiusTop, radiusBottom, height]}>
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

export { RapierPinballMachineBumper };
