import { useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

import { colorsGenerator } from "Utils/color";

function getPosition() {
  const newPosition = [5, 4, 0].map((value) => (Math.random() * 2 - 1) * value);

  return new Vector3().fromArray(newPosition);
}

enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}
enum SCALE {
  LARGE = 1.5,
  SMALL = 1,
}

const ALPHA = 0.1;
const ORIGIN_VECTOR = new Vector3();

const colors = colorsGenerator();
const initialColor = colors.next().value as string;
const scale = new Vector3();

/**
 * Animated Cube.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const AnimatedCubeDefault = (props: GroupProps): React.JSX.Element => {
  // References.
  const cubeRef = useRef<Mesh>(null!);

  // States.
  const [color, setColor] = useState(initialColor);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(ORIGIN_VECTOR);

  // Event handlers.
  const clickHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    const nextColor = colors.next().value as string;
    const nextPosition = getPosition();
    setColor(nextColor);
    setPosition(nextPosition);
  }, []);
  const pointerOutHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
  }, []);
  const pointerOverHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(true);
  }, []);

  // Cursor on hover.
  useCursor(isHovered);

  useFrame(({ clock }) => {
    // Position.
    cubeRef.current.position.lerp(position, ALPHA);
    // Rotation.
    const delta = clock.getElapsedTime();
    cubeRef.current.rotation.set(delta, delta, delta);
    // Scale.
    const scaleScalar = isHovered ? SCALE.LARGE : SCALE.SMALL;
    cubeRef.current.scale.lerp(scale.setScalar(scaleScalar), ALPHA);
  });

  return (
    <group name="Animated Cube Default" {...props}>
      <mesh
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        ref={cubeRef}
        scale={SCALE.SMALL}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          opacity={isHovered ? OPACITY.HIGH : OPACITY.LOW}
          transparent={true}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

export { AnimatedCubeDefault as AnimatedCube };
