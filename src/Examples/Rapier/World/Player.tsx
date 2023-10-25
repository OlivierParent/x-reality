import {
  PointerLockControls,
  Shadow,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Examples/Player.config";

const SAFE_OFFSET = 0.001; // Prevent Z Fighting.

const velocityVector = new Vector3();
const emptyVector = new Vector3();

const RapierWorldPlayer = () => {
  // Keyboard Controls.
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);

  // References.
  const playerRef = useRef<any>(null!);
  const pointerRef = useRef<any>(null!);
  const shadowRef = useRef<any>(null!);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const player = playerRef.current;
    const shadow = shadowRef.current;

    // Move Player.
    const playerVelocity = player.linvel(); // Get linear velocity.
    velocityVector.set(
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
      player.setAngvel(emptyVector);
    }

    // Apply linear velocity to Player.
    player.setLinvel(velocityVector);

    const playerPosition = player.translation();

    // Match Camera position to Player position.
    camera.position.copy(playerPosition);
    camera.position.y += PLAYER.HEIGHT - PLAYER.SIZE;

    // Match Shadow position to Player position.
    shadow.position.copy(playerPosition);
    shadow.position.y = SAFE_OFFSET;
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
          <meshBasicMaterial
            color={0x00ff00}
            visible={false}
            wireframe={true}
          />
        </Sphere>
      </RigidBody>
      <Shadow
        color="black"
        colorStop={0}
        fog={false}
        opacity={0.5}
        ref={shadowRef}
      />
    </group>
  );
};

export { RapierWorldPlayer };
