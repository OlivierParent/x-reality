import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Mesh, MeshStandardMaterial, Vector3 } from "three";

import { colorsGenerator } from "Utils/color";

function getPosition() {
  const newPosition = [5, 4, 0].map((value) => (Math.random() * 2 - 1) * value);

  return new Vector3(...newPosition);
}

const SCALE = Object.freeze({
  LARGE: new Vector3().setScalar(1.5),
  SMALL: new Vector3().setScalar(1),
});

enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}

const colors = colorsGenerator();
const initialColor = colors.next().value as string;
const gsapObject = { color: initialColor };
const gsapTimeline: any = gsap.timeline();

/**
 * Animated Cube with GSAP.
 *
 * @see https://gsap.com/
 *
 * @param {GroupProps} props
 * @returns { JSX.Element }
 */
const AnimatedCubeGreenSock = (props: GroupProps): JSX.Element => {
  // References.
  const cubeRef = useRef<Mesh>(null!);
  const materialRef = useRef<MeshStandardMaterial>(null!);

  // States.
  const [color, setColor] = useState(initialColor);
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState<Vector3>(new Vector3(0, 0, 0));

  // Event handlers.
  const clickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    const nextColor = colors.next().value as string;
    const nextPosition = getPosition();
    setColor(nextColor);
    setPosition(nextPosition);
  };
  const pointerOutHandler = () => {
    setHover(false);
  };
  const pointerOverHandler = () => {
    setHover(true);
  };

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
    const opacity = hover ? OPACITY.HIGH : OPACITY.LOW;
    const scale = hover ? SCALE.LARGE : SCALE.SMALL;
    gsapTimeline.to(materialRef.current, {
      opacity,
      duration: 0.125, // Default: 0.5
    });
    gsapTimeline.to(cubeRef.current.scale, {
      ...scale,
      duration: 0.125, // Default: 0.5
    });
  }, [hover]);

  useEffect(() => {
    // Parallel animation with `gsap`.
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
    <group name="Animated Cube with GreenSock" {...props}>
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
