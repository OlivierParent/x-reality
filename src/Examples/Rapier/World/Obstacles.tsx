import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

import {
  cursorActiveHandler,
  cursorInactiveHandler,
} from "Components/UserInterface/CursorOverlay";
import { OBSTACLE } from "Examples/Obstacle.config";

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
        onPointerEnter={cursorActiveHandler}
        onPointerLeave={cursorInactiveHandler}
        onPointerOut={cursorInactiveHandler}
        onPointerOver={cursorActiveHandler}
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

/**
 * Obstacles.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierWorldObstacles = (props: GroupProps): JSX.Element => {
  return (
    <group name="Obstacles" {...props}>
      {obstacles.map(({ position }, index) => (
        <Obstacle key={index} position={position} />
      ))}
    </group>
  );
};

export { RapierWorldObstacles as Obstacles };
