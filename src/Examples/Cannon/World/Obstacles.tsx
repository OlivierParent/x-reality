import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

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

  return [x, y, z] as [number, number, number];
});

const obstacles = new Array(OBSTACLE.BOX.COUNT).fill(null).map((_, index) => {
  const position = RANDOM_COORDINATES[index];

  return { position };
});

type ObstacleProps = { position: [number, number, number] };

const Obstacle = ({ position }: ObstacleProps) => {
  const args: [number, number, number] = [
    OBSTACLE.BOX.SIZE,
    OBSTACLE.BOX.SIZE,
    OBSTACLE.BOX.SIZE,
  ];

  const [ref] = useBox(
    () => ({
      args,
      mass: OBSTACLE.BOX.MASS,
      position,
    }),
    useRef<Mesh>(null)
  );

  return (
    <Box
      args={args}
      onPointerEnter={cursorActiveHandler}
      onPointerLeave={cursorInactiveHandler}
      onPointerOut={cursorInactiveHandler}
      onPointerOver={cursorActiveHandler}
      ref={ref}
    >
      <meshBasicMaterial
        color={0xffffff * Math.random()}
        opacity={0.75}
        transparent={true}
      />
    </Box>
  );
};

/**
 * Obstacles.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const CannonWorldObstacles = (props: GroupProps): React.JSX.Element => {
  return (
    <group name="Obstacles" {...props}>
      {obstacles.map(({ position }, index) => (
        <Obstacle key={index} position={position} />
      ))}
    </group>
  );
};

export { CannonWorldObstacles as Obstacles };
