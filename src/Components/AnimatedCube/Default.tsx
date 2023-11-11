import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

import { colorsGenerator } from "Utils/color";

function getPosition() {
  const newPosition = [5, 4, 0].map((value) => (Math.random() * 2 - 1) * value);

  return new Vector3(...newPosition);
}

enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}
enum SCALE {
  LARGE = 1.5,
  SMALL = 1,
}

const colors = colorsGenerator();
const initialColor = colors.next().value as string;

/**
 * Animated Cube.
 *
 * @param {GroupProps} props
 * @returns { JSX.Element }
 */
const AnimatedCubeDefault = (props: GroupProps): JSX.Element => {
  // References.
  const cubeRef = useRef<Mesh>(null!);

  // States.
  const [color, setColor] = useState(initialColor);
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(new Vector3());

  // Event handlers.
  const clickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    setColor(colors.next().value as string);
    setPosition(new Vector3(...getPosition()));
  };
  const pointerOutHandler = () => {
    setHover(false);
  };
  const pointerOverHandler = () => {
    setHover(true);
  };

  useFrame(({ clock }) => {
    const delta = clock.getElapsedTime();
    cubeRef.current.rotation.set(delta, delta, delta);
  });

  return (
    <group name="Animated Cube Default" {...props}>
      <mesh
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        position={position}
        ref={cubeRef}
        scale={hover ? SCALE.LARGE : SCALE.SMALL}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          opacity={hover ? OPACITY.HIGH : OPACITY.LOW}
          transparent={true}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

export { AnimatedCubeDefault as AnimatedCube };
