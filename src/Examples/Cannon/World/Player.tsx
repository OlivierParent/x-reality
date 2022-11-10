import { useSphere } from "@react-three/cannon";
import {
  PointerLockControls,
  Sphere,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

const PLAYER_MASS = 75; // kg
const PLAYER_POSITION = [0, 2, 2];
const PLAYER_SIZE = 0.5; // radius in m
const VELOCITY = {
  FORWARD_DIRECTION: 3,
  RIGHT_DIRECTION: 1,
};

const CannonWorldPlayer = (props: any) => {
  const moveBackwardOn = useKeyboardControls((state) => state.moveBackward);
  const moveForwardOn = useKeyboardControls((state) => state.moveForward);
  const moveLeftOn = useKeyboardControls((state) => state.moveLeft);
  const moveRightOn = useKeyboardControls((state) => state.moveRight);
  const pointerRef = useRef<any>(null!);

  const [playerRef, playerApi] = useSphere(
    () => ({
      ...props,
      args: [PLAYER_SIZE],
      mass: PLAYER_MASS,
      position: PLAYER_POSITION,
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
    const player = playerRef.current;

    // Match Player direction to Camera direction.
    player.quaternion.copy(camera.quaternion);

    // Move Player
    const velocityVector = new Vector3(
      (moveRightOn ? 1 : moveLeftOn ? -1 : 0) * VELOCITY.RIGHT_DIRECTION,
      0,
      (moveForwardOn ? -1 : moveBackwardOn ? 1 : 0) * VELOCITY.FORWARD_DIRECTION
    );
    velocityVector.applyQuaternion(player.quaternion);
    velocityVector.y = playerVelocity.current[1]; // Use stored velocity in Y direction (gravity).
    playerApi.velocity.copy(velocityVector);

    // Match Camera position to Player position.
    camera.position.copy(playerPosition.current);
    camera.position.y += 1.25; // 1.75m
  });

  return (
    <group name="Player">
      <PointerLockControls ref={pointerRef} />

      <Sphere args={[PLAYER_SIZE, 8, 8]} ref={playerRef}>
        <meshBasicMaterial color={0x00ff00} wireframe={true} />
      </Sphere>
    </group>
  );
};

export { CannonWorldPlayer };
