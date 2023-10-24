import { useSphere } from "@react-three/cannon";
import {
  PointerLockControls,
  Shadow,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Examples/Player.config";

const SAFE_OFFSET = 0.001; // Prevent Z Fighting.

const emptyVector = new Vector3();
const positionVector = new Vector3();
const velocityVector = new Vector3();

const CannonWorldPlayer = () => {
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);

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
  const playerPosition = useRef(emptyVector);

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
    velocityVector.set(
      (moveRightOn ? 1 : moveLeftOn ? -1 : 0) * PLAYER.VELOCITY.RIGHT_DIRECTION,
      0,
      (moveForwardOn ? -1 : moveBackwardOn ? 1 : 0) *
        PLAYER.VELOCITY.FORWARD_DIRECTION
    );
    // Match velocityVector direction to Camera direction.
    velocityVector.applyQuaternion(camera.quaternion);
    velocityVector.y = playerVelocity.current[1]; // Use stored velocity in Y direction (gravity).

    // Apply velocity to Player.
    playerApi.velocity.copy(velocityVector);

    // Match Camera position to Player position.
    camera.position.copy(playerPosition.current);
    camera.position.y += PLAYER.HEIGHT - PLAYER.SIZE;

    // Match Shadow position to Player position.
    shadow.position.copy(playerPosition.current);
    shadow.position.y = SAFE_OFFSET;
  });

  return (
    <group name="Player">
      <PointerLockControls ref={pointerRef} />
      <Sphere args={[PLAYER.SIZE, 8, 8]} ref={playerRef}>
        <meshBasicMaterial color={0x00ff00} wireframe={true} visible={false} />
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

export { CannonWorldPlayer };
