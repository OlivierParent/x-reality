import { useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mesh, MeshStandardMaterial, Vector3 } from "three";

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
  LARGE: new Vector3().setScalar(1.5),
  SMALL: new Vector3().setScalar(1),
} as const;

const colors = colorsGenerator();
const initialColor = colors.next().value as string;
const gsapObject = { color: initialColor };
const gsapTimeline: gsap.core.Timeline = gsap.timeline();

/**
 * Animated Cube with GreenSock GSAP.
 *
 * @see https://gsap.com/resources/React/
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const AnimatedCubeGreenSock = (props: GroupProps): JSX.Element => {
  // References.
  const cubeRef = useRef<Mesh>(null!);
  const materialRef = useRef<MeshStandardMaterial>(null!);

  // States.
  const [color, setColor] = useState(initialColor);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState<Vector3>(ORIGIN_VECTOR);

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
    // Parallel animation with `gsap`.
    gsap.to(gsapObject, {
      color,
      onUpdate: () => {
        materialRef.current.color.set(gsapObject.color);
      },
    });
  }, [color]);

  useEffect(() => {
    // Sequential animation with `gsapTimeline`.
    // Opacity.
    const opacity = //
      isHovered //
        ? OPACITY.HIGH
        : OPACITY.LOW;
    gsapTimeline.to(materialRef.current, {
      opacity,
      duration: 0.125, // Default: 0.5
    });

    // Scale.
    const scale = //
      isHovered //
        ? SCALE.LARGE
        : SCALE.SMALL;
    gsapTimeline.to(cubeRef.current.scale, {
      ...scale,
      duration: 0.125, // Default: 0.5
    });
  }, [isHovered]);

  useEffect(() => {
    // Parallel animation with `gsap`.
    // Position.
    gsap.to(cubeRef.current.position, {
      ...position,
      duration: 0.25, // Default: 0.5
    });
  }, [position]);

  useFrame(({ clock }) => {
    const delta = clock.getElapsedTime();
    cubeRef.current.rotation.set(delta, delta, delta);
  });

  return (
    <group name="Animated Cube with GreenSock GSAP" {...props}>
      <mesh
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        ref={cubeRef}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          ref={materialRef}
          transparent={true}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

export { AnimatedCubeGreenSock as AnimatedCube };
