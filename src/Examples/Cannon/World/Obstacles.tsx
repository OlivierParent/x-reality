import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

import { OBSTACLE } from "Examples/Obstacle.config";

const RANDOM_COORDINATES = new Array(OBSTACLE.BOX.COUNT).fill(null).map(() => {
  const x = Math.floor(
    Math.random() * OBSTACLE.PLANE.SIZE - OBSTACLE.PLANE.SIZE / 2
  );
  const y = OBSTACLE.BOX.SIZE / 2;
  const z = Math.floor(
    Math.random() * OBSTACLE.PLANE.SIZE - OBSTACLE.PLANE.SIZE / 2
  );

  return [x, y, z] as [number, number, number];
});

type ObstacleProps = { position: [number, number, number] };

const Obstacle = ({ position }: ObstacleProps) => {
  const args: [number, number, number] = [
    OBSTACLE.BOX.SIZE,
    OBSTACLE.BOX.SIZE,
    OBSTACLE.BOX.SIZE,
  ];

  const [ref] = useBox(() => ({
    args,
    mass: OBSTACLE.BOX.MASS,
    position,
  }));

  return (
    <Box args={args} ref={ref}>
      <meshBasicMaterial
        color={0xffffff * Math.random()}
        opacity={0.75}
        transparent={true}
      />
    </Box>
  );
};

const CannonWorldObstacles = () => {
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

export { CannonWorldObstacles };
