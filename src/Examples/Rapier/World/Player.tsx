import {
  PointerLockControls,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";

const PLAYER_MASS = 75; // kg
const PLAYER_POSITION = new Vector3(0, 2, 2);
const PLAYER_SIZE = 0.5; // radius in m
const VELOCITY = {
  FORWARD_DIRECTION: 3,
  RIGHT_DIRECTION: 1,
};

const RapierWorldPlayer = (props: any) => {
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);

  const playerRef = useRef<any>(null!);
  const pointerRef = useRef<any>(null!);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const player = playerRef.current;

    // Move Player
    const playerVelocity = player.linvel();
    const velocityVector = new Vector3(
      (moveRightOn ? 1 : moveLeftOn ? -1 : 0) * VELOCITY.RIGHT_DIRECTION,
      0,
      (moveForwardOn ? -1 : moveBackwardOn ? 1 : 0) * VELOCITY.FORWARD_DIRECTION
    );
    // Match velocityVector direction to Camera direction.
    velocityVector.applyQuaternion(camera.quaternion);
    velocityVector.y = playerVelocity.y;

    // Apply velocity to Player.
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
        mass={PLAYER_MASS}
        position={PLAYER_POSITION}
        ref={playerRef}
        type="dynamic"
      >
        <Sphere args={[PLAYER_SIZE, 4, 4]}>
          <meshBasicMaterial color={0x00ff00} wireframe={true} />
        </Sphere>
      </RigidBody>
    </group>
  );
};

export { RapierWorldPlayer };
