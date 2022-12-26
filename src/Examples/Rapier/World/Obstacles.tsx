import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Vector3 } from "three";

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

type ObstacleProps = { position: Vector3 };

const Obstacle = ({ position }: ObstacleProps) => {
  const args: [number, number, number] = [
    OBSTACLE.BOX.SIZE,
    OBSTACLE.BOX.SIZE,
    OBSTACLE.BOX.SIZE,
  ];

  return (
    <RigidBody colliders="cuboid" type="fixed">
      <Box args={args} position={position}>
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
  let obstacles = new Array(OBSTACLE.BOX.COUNT).fill(null).map((box, index) => {
    const position = RANDOM_COORDINATES[index];

    return { position };
  });

  return (
    <group name="Obstacles">
      {obstacles.map((box, index) => {
        return <Obstacle key={index} position={box.position} />;
      })}
    </group>
  );
};

export { RapierWorldObstacles };
