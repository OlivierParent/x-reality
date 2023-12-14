import { useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useCallback, useEffect, useRef, useState } from "react";
import { MeshStandardMaterial, Vector3 } from "three";

import { colorsGenerator } from "Utils/color";

function getPosition() {
  const newPosition = [5, 4, 0].map((value) => (Math.random() * 2 - 1) * value);

  return new Vector3().fromArray(newPosition);
}

enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}

const ORIGIN_VECTOR = new Vector3();
const SCALE = {
  LARGE: 1.5,
  SMALL: 1,
} as const;

const colors = colorsGenerator();
const initialColor = colors.next().value as string;

/**
 * Animated Cube with Framer Motion 3D.
 *
 * @see https://www.framer.com/motion/
 * @see https://www.framer.com/motion/three-introduction/
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const AnimatedCubeFramerMotion3d = (props: GroupProps): React.JSX.Element => {
  // References.
  const cubeRef = useRef<any>(null!);
  const materialRef = useRef<MeshStandardMaterial>(null!);

  // States.
  const [color, setColor] = useState(initialColor);
  const [isHovered, setIsHovered] = useState(false);
  const [opacity, setOpacity] = useState(OPACITY.LOW);
  const [position, setPosition] = useState<Vector3>(ORIGIN_VECTOR);
  const [scale, setScale] = useState<number>(SCALE.SMALL);

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

  useEffect(() => {
    // Opacity.
    const opacity = //
      isHovered //
        ? OPACITY.HIGH
        : OPACITY.LOW;
    setOpacity(opacity);

    // Scale
    const scale: number = //
      isHovered //
        ? SCALE.LARGE
        : SCALE.SMALL;
    setScale(scale);
  }, [isHovered]);

  useFrame(({ clock }) => {
    const delta = clock.getElapsedTime();
    cubeRef.current.rotation.set(delta, delta, delta);
  });

  return (
    <group name="Animated Cube with Framer Motion 3D" {...props}>
      <motion.mesh
        animate={{
          ...position, //
          scale,
        }}
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        ref={cubeRef}
        transition={{
          duration: 0.25, //
          scale: {
            duration: 0.125, //
          },
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <motion.meshStandardMaterial
          animate={{
            color, //
            opacity,
          }}
          ref={materialRef}
          transition={{
            opacity: {
              delay: 0.125, //
              duration: 0.125,
            },
          }}
          transparent={true}
          wireframe={false}
        />
      </motion.mesh>
    </group>
  );
};

export { AnimatedCubeFramerMotion3d as AnimatedCube };
