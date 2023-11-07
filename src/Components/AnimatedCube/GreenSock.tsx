import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Color, Mesh, MeshStandardMaterial, Vector3 } from "three";

import { colorsGenerator } from "Utils/color";

function getPosition() {
  return new Vector3(
    ...[4, 4, 0].map((value) => (Math.random() * 2 - 1) * value)
  );
}

const SCALE = {
  LARGE: new Vector3().setScalar(1.5),
  SMALL: new Vector3().setScalar(1),
};

enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}

const colors = colorsGenerator();
const initialColor = colors.next().value as string;
const colorObject = new Color(initialColor);
const gsapObject = { colorValue: initialColor };
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
  const cubeRef = useRef<Mesh>(null!);
  const materialRef = useRef<MeshStandardMaterial>(null!);
  const [color, setColor] = useState(initialColor);
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState<Vector3>(new Vector3(0, 0, 0));

  // Event Handlers.
  const clickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    setColor(colors.next().value as string);
    setPosition(getPosition());
  };
  const pointerOutHandler = () => {
    setHover(false);
  };
  const pointerOverHandler = () => {
    setHover(true);
  };

  useEffect(() => {
    // Parallel animation with `gsap`
    gsap.to(gsapObject, {
      colorValue: color,
      onUpdate: () => {
        materialRef.current.color = colorObject.set(gsapObject.colorValue);
      },
    });
  }, [color]);

  useEffect(() => {
    // Sequential animation with `gsapTimeline`
    gsapTimeline.to(materialRef.current, {
      opacity: hover ? OPACITY.HIGH : OPACITY.LOW,
      duration: 0.125, // Default: 0.5
    });
    const scale = hover ? SCALE.LARGE : SCALE.SMALL;
    gsapTimeline.to(cubeRef.current.scale, { ...scale });
  }, [hover]);

  useEffect(() => {
    // Parallel animation with `gsap`
    gsap.to(cubeRef.current.position, {
      ...position,
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
