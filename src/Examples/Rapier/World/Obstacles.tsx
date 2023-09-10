import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import { OBSTACLE } from "Examples/Obstacle.config";
import {
  cursorActiveEventHandler,
  cursorInactiveEventHandler,
} from "Components/UserInterface/CursorOverlay";

const RANDOM_COORDINATES = new Array(OBSTACLE.BOX.COUNT).fill(null).map(() => {
  const x = Math.floor(
    Math.random() * OBSTACLE.PLANE.SIZE - OBSTACLE.PLANE.SIZE / 2
  );
  const y = OBSTACLE.BOX.SIZE / 2;
  const z = Math.floor(
    Math.random() * OBSTACLE.PLANE.SIZE - OBSTACLE.PLANE.SIZE / 2
  );

  return new Vector3(x, y, z);
});

const obstacles = new Array(OBSTACLE.BOX.COUNT).fill(null).map((_, index) => {
  const position = RANDOM_COORDINATES[index];

  return { position };
});

type ObstacleProps = { position: Vector3 };

const Obstacle = ({ position }: ObstacleProps) => {
  return (
    <RigidBody colliders="cuboid" type="fixed">
      <Box
        args={[OBSTACLE.BOX.SIZE, OBSTACLE.BOX.SIZE, OBSTACLE.BOX.SIZE]}
        onPointerEnter={cursorActiveEventHandler}
        onPointerLeave={cursorInactiveEventHandler}
        onPointerOut={cursorInactiveEventHandler}
        onPointerOver={cursorActiveEventHandler}
        position={position}
      >
        <meshBasicMaterial
          color={0xffffff * Math.random()}
          opacity={0.75}
          transparent={true}
        />
      </Box>
    </RigidBody>
  );
};

const RapierWorldObstacles = () => {
  return (
    <group name="Obstacles">
      {obstacles.map(({ position }, index) => {
        return <Obstacle key={index} position={position} />;
      })}
    </group>
  );
};

export { RapierWorldObstacles };