import { useSphere } from "@react-three/cannon";
import {
  PointerLockControls,
  Shadow,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Examples/Player.config";

const ORIGIN_VECTOR = new Vector3();
const SAFE_OFFSET = 0.001; // Prevent Z Fighting.

const positionVector = new Vector3();
const velocityVector = new Vector3();

/**
 * Player.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const CannonWorldPlayer = (props: GroupProps): React.JSX.Element => {
  // Keyboard Controls.
  const jumpOn = useKeyboardControls((state) => state.jump);
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);
  const runOn = useKeyboardControls((state) => state.run);

  // References.
  const pointerRef = useRef<any>(null!);
  const shadowRef = useRef<any>(null!);

  const [playerRef, playerApi] = useSphere(
    () => ({
      args: [PLAYER.SIZE],
      mass: PLAYER.MASS,
      position: PLAYER.POSITION.toArray(),
    }),
    useRef<any>(null!)
  );

  // Store Player velocity
  const playerVelocity = useRef([0, 0, 0]);
  const playerPosition = useRef(ORIGIN_VECTOR);

  useEffect(() => {
    playerApi.velocity.subscribe((v) => (playerVelocity.current = v));
    playerApi.position.subscribe(
      (v) => (playerPosition.current = positionVector.set(...v))
    );
  }, [playerApi.velocity, playerApi.position]);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const shadow = shadowRef.current;

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
        : PLAYER.VELOCITY.DEFAULT;
    const normalDirectionModifier = //
      jumpOn //
        ? PLAYER.DIRECTION.UP
        : PLAYER.DIRECTION.DOWN;
    const normalVelocityModifier = PLAYER.VELOCITY.NORMAL;
    const runModifier = //
      runOn //
        ? PLAYER.VELOCITY.RUN
        : PLAYER.VELOCITY.DEFAULT;
    velocityVector.set(
      lateralDirectionModifier * lateralVelocityModifier * runModifier,
      normalDirectionModifier * normalVelocityModifier * runModifier, // Camera quaternion should not affect velocity on gravity/normal axis.
      longitudinalDirectionModifier * longitudinalVelocityModifier * runModifier
    );

    // Match velocityVector direction to Camera direction.
    velocityVector.applyQuaternion(camera.quaternion);
    velocityVector.y = playerVelocity.current[1]; // Use stored velocity in Y direction (gravity).

    // Reset angular velocity of Player if no movement detected.
    if (!moveBackwardOn && !moveForwardOn && !moveLeftOn && !moveRightOn) {
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
