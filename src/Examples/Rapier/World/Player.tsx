import {
  PointerLockControls,
  Shadow,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Examples/Player.config";

const SAFE_OFFSET = 0.001; // Prevent Z Fighting.
const ZERO_VECTOR = new Vector3();

const velocityVector = ZERO_VECTOR.clone();

/**
 * Player.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierWorldPlayer = (props: GroupProps): React.JSX.Element => {
  // Keyboard Controls.
  const jumpOn = useKeyboardControls((state) => state.jump);
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);
  const runOn = useKeyboardControls((state) => state.run);

  // References.
  const playerRef = useRef<any>(null!);
  const pointerRef = useRef<any>(null!);
  const shadowRef = useRef<any>(null!);

  // States.
  const [canJump, setCanJump] = useState(true);
  const [hasJumped, setHasJumped] = useState(false);

  useEffect(() => {
    if (hasJumped) {
      setTimeout(() => setCanJump(true), 1000);
      setTimeout(() => setHasJumped(false), 230);
    }
  }, [hasJumped]);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const player = playerRef.current;
    const shadow = shadowRef.current;

    // Get Player velocity.
    const playerVelocity = player.linvel(); // Get linear velocity.

    // Move Player
    const lateralDirectionModifier = //
      moveRightOn
        ? PLAYER.DIRECTION.RIGHT
        : moveLeftOn
        ? PLAYER.DIRECTION.LEFT
        : PLAYER.DIRECTION.NONE;
    const lateralVelocityModifier = PLAYER.VELOCITY.LATERAL;

    const longitudinalDirectionModifier = //
      moveForwardOn
        ? PLAYER.DIRECTION.FORWARD
        : moveBackwardOn
        ? PLAYER.DIRECTION.BACKWARD
        : PLAYER.DIRECTION.NONE;
    const longitudinalVelocityModifier = //
      moveForwardOn
        ? PLAYER.VELOCITY.FORWARD
        : moveBackwardOn
        ? PLAYER.VELOCITY.DEFAULT
        : PLAYER.VELOCITY.NONE;

    if (canJump && !hasJumped && jumpOn) {
      setHasJumped(true);
      setCanJump(false);
    }
    const normalDirectionModifier = //
      jumpOn //
        ? PLAYER.DIRECTION.UP
        : PLAYER.DIRECTION.NONE;
    const normalVelocityModifier =
      hasJumped && jumpOn //
        ? PLAYER.VELOCITY.NORMAL
        : PLAYER.VELOCITY.NONE;

    const runModifier = //
      runOn //
        ? PLAYER.VELOCITY.RUN
        : PLAYER.VELOCITY.DEFAULT;

    velocityVector.set(
      lateralDirectionModifier * lateralVelocityModifier * runModifier,
      0, // Camera quaternion should not affect velocity on gravity/normal axis.
      longitudinalDirectionModifier * longitudinalVelocityModifier * runModifier
    );

    // Match velocityVector direction to Camera direction.
    velocityVector.applyQuaternion(camera.quaternion);
    velocityVector.y =
      playerVelocity.y + normalDirectionModifier * normalVelocityModifier; // Add velocity on gravity axis back after applying camera quaternion.

    // Reset angular velocity of Player if no movement detected.
    if (!moveBackwardOn && !moveForwardOn && !moveLeftOn && !moveRightOn) {
      player.setAngvel(ZERO_VECTOR);
    }

    // Apply linear velocity to Player.
    player.setLinvel(velocityVector);

    // Get Player position.
    const playerPosition = player.translation();

    // Match Camera position to Player position.
    camera.position.copy(playerPosition);
    camera.position.y += PLAYER.HEIGHT - PLAYER.SIZE;

    // Match Shadow position to Player position.
    shadow.position.copy(playerPosition);
    shadow.position.y = SAFE_OFFSET;
  });

  return (
    <group name="Player" {...props}>
      <PointerLockControls ref={pointerRef} />
      <RigidBody
        canSleep={false} // Important or it will not always update!
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

export { RapierWorldPlayer as Player };
