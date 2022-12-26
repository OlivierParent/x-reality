import {
  PointerLockControls,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Examples/Player.config";

const RapierWorldPlayer = () => {
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);

  const playerRef = useRef<any>(null!);
  const pointerRef = useRef<any>(null!);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const player = playerRef.current;

    // Move Player.
    const playerVelocity = player.linvel(); // Get linear velocity.
    const velocityVector = new Vector3(
      (moveRightOn ? 1 : moveLeftOn ? -1 : 0) * PLAYER.VELOCITY.RIGHT_DIRECTION,
      0, // Camera quaternion should not affect velocity on gravity axis.
      (moveForwardOn ? -1 : moveBackwardOn ? 1 : 0) *
        PLAYER.VELOCITY.FORWARD_DIRECTION
    );
    // Match velocityVector direction to Camera direction.
    velocityVector.applyQuaternion(camera.quaternion);
    velocityVector.y = playerVelocity.y; // Add velocity on gravity axis back after applying camera quaternion.

    // Reset player angular velocity if no movement detected.
    if (!moveBackwardOn && !moveForwardOn && !moveLeftOn && !moveRightOn) {
      player.setAngvel(new Vector3());
    }

    // Apply linear velocity to Player.
    player.setLinvel(velocityVector);

    // Match Camera position to Player position.
    camera.position.copy(player.translation());
    camera.position.y += 1.25; // 1.75m
  });

  return (
    <group name="Player">
      <PointerLockControls ref={pointerRef} />

      <RigidBody
        colliders="ball"
        mass={PLAYER.MASS}
        position={PLAYER.POSITION}
        ref={playerRef}
        type="dynamic"
      >
        <Sphere args={[PLAYER.SIZE, 8, 8]}>
          <meshBasicMaterial color={0x00ff00} wireframe={true} />
        </Sphere>
      </RigidBody>
    </group>
  );
};

export { RapierWorldPlayer };
