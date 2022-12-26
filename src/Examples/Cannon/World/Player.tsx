import { useSphere } from "@react-three/cannon";
import {
  PointerLockControls,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

import { PLAYER } from "Examples/Player.config";

const CannonWorldPlayer = () => {
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);

  const pointerRef = useRef<any>(null!);

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
  const playerPosition = useRef(new Vector3());

  useEffect(() => {
    playerApi.velocity.subscribe((v) => (playerVelocity.current = v));
    playerApi.position.subscribe(
      (v) => (playerPosition.current = new Vector3(...v))
    );
  }, [playerApi.velocity, playerApi.position]);

  useFrame(() => {
    const camera = pointerRef.current.getObject();

    // Move Player
    const velocityVector = new Vector3(
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
    camera.position.y += 1.25; // 1.75m
  });

  return (
    <group name="Player">
      <PointerLockControls ref={pointerRef} />

      <Sphere args={[PLAYER.SIZE, 8, 8]} ref={playerRef}>
        <meshBasicMaterial color={0x00ff00} wireframe={true} />
      </Sphere>
    </group>
  );
};

export { CannonWorldPlayer };
