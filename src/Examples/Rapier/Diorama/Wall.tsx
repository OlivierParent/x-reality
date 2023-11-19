import { Box } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

type WallProps = {
  color?: string;
};

enum WALL {
  HEIGHT = 3,
  WIDTH = 5,
  THICKNESS = 0.1,
}

/**
 * Wall.
 *
 * @param {GroupProps & WallProps} props
 * @returns {React.JSX.Element}
 */
const RapierDioramaWall = (
  props: GroupProps & WallProps
): React.JSX.Element => {
  const args: [number, number, number] = [
    WALL.WIDTH,
    WALL.HEIGHT,
    WALL.THICKNESS,
  ];
  const position: [number, number, number] = [
    0,
    WALL.HEIGHT / 2,
    -WALL.THICKNESS / 2,
  ];

  return (
    <group name="Wall" {...props}>
      <RigidBody type="fixed" position={position}>
        <Box //
          args={args}
          castShadow={true}
          receiveShadow={true}
        >
          <meshStandardMaterial color={props.color} />
        </Box>
      </RigidBody>
    </group>
  );
};

export { RapierDioramaWall as Wall };
