import { useSphere } from "@react-three/cannon";
import {
  PointerLockControls,
  Shadow,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Examples/Player.config";

const SAFE_OFFSET = 0.001; // Prevent Z Fighting.
const ZERO_VECTOR = new Vector3();

const positionVector = ZERO_VECTOR.clone();
const velocityVector = ZERO_VECTOR.clone();

/**
 * Player.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const CannonWorldPlayer = (props: GroupProps): React.JSX.Element => {
  // Keyboard Controls.
  const playerJumpOn = useKeyboardControls(
    (state) => state.playerJump //
  );
  const playerMoveBackwardOn = useKeyboardControls(
    (state) => state.playerMoveBackward
  );
  const playerMoveForwardOn = useKeyboardControls(
    (state) => state.playerMoveForward
  );
  const playerMoveLeftOn = useKeyboardControls(
    (state) => state.playerMoveLeft //
  );
  const playerMoveRightOn = useKeyboardControls(
    (state) => state.playerMoveRight
  );
  const playerRunOn = useKeyboardControls(
    (state) => state.playerRun //
  );

  // References.
  const pointerRef = useRef<any>(null!);
  const shadowRef = useRef<any>(null!);

  // States.
  const [canJump, setCanJump] = useState(true);
  const [hasJumped, setHasJumped] = useState(false);

  const [playerRef, playerApi] = useSphere(
    () => ({
      args: [PLAYER.SIZE],
      mass: PLAYER.MASS,
      position: PLAYER.POSITION.toArray(),
    }),
    useRef<any>(null!)
  );

  // Store Player velocity and position.
  const playerVelocity = useRef([0, 0, 0]);
  const playerPosition = useRef(ZERO_VECTOR);

  useEffect(() => {
    if (hasJumped) {
      setTimeout(() => setCanJump(true), 1000);
      setTimeout(() => setHasJumped(false), 230);
    }
  }, [hasJumped]);

  useEffect(() => {
    playerApi.velocity.subscribe((v) => (playerVelocity.current = v));
    playerApi.position.subscribe(
      (v) => (playerPosition.current = positionVector.set(...v))
    );
  }, [playerApi.velocity, playerApi.position]);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const shadow = shadowRef.current;

    // Move Player.
    const lateralDirectionModifier = //
      playerMoveRightOn
        ? PLAYER.DIRECTION.RIGHT
        : playerMoveLeftOn
        ? PLAYER.DIRECTION.LEFT
        : PLAYER.DIRECTION.NONE;
    const lateralVelocityModifier = PLAYER.VELOCITY.LATERAL;

    const longitudinalDirectionModifier = //
      playerMoveForwardOn
        ? PLAYER.DIRECTION.FORWARD
        : playerMoveBackwardOn
        ? PLAYER.DIRECTION.BACKWARD
        : PLAYER.DIRECTION.NONE;
    const longitudinalVelocityModifier = //
      playerMoveForwardOn
        ? PLAYER.VELOCITY.FORWARD
        : playerMoveBackwardOn
        ? PLAYER.VELOCITY.DEFAULT
        : PLAYER.VELOCITY.NONE;

    if (canJump && !hasJumped && playerJumpOn) {
      setHasJumped(true);
      setCanJump(false);
    }
    const normalDirectionModifier = //
      playerJumpOn //
        ? PLAYER.DIRECTION.UP
        : PLAYER.DIRECTION.NONE;
    const normalVelocityModifier =
      hasJumped && playerJumpOn //
        ? PLAYER.VELOCITY.NORMAL
        : PLAYER.VELOCITY.NONE;

    const runModifier = //
      playerRunOn //
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
      playerVelocity.current[1] +
      normalDirectionModifier * normalVelocityModifier; // Use stored velocity in Y direction (gravity).

    // Reset angular velocity of Player if no movement detected.
    if (
      !playerMoveBackwardOn &&
      !playerMoveForwardOn &&
      !playerMoveLeftOn &&
      !playerMoveRightOn
    ) {
      playerApi.angularVelocity.copy(velocityVector);
    }

    // Apply linear velocity to Player.
    playerApi.velocity.copy(velocityVector);

    // Match Camera position to Player position.
    camera.position.copy(playerPosition.current);
    camera.position.y += PLAYER.HEIGHT - PLAYER.SIZE;

    // Match Shadow position to Player position.
    shadow.position.copy(playerPosition.current);
    shadow.position.y = SAFE_OFFSET;
  });

  return (
    <group name="Player" {...props}>
      <PointerLockControls ref={pointerRef} />
      <Sphere //
        args={[PLAYER.SIZE, 8, 8]}
        ref={playerRef}
      >
        <meshBasicMaterial //
          color={0x00ff00}
          wireframe={true}
          visible={false}
        />
      </Sphere>
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

export { CannonWorldPlayer as Player };
