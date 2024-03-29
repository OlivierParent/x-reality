import { useCursor, useGLTF } from "@react-three/drei";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

import gltfLogoGlb from "Components/Logo/assets/gltf-logo.glb";

const SPEED = 0.025;

/**
 * Single Logo.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const LogoSingle = (props: GroupProps): JSX.Element => {
  const { scene }: any = useGLTF(gltfLogoGlb, true);

  // References.
  const logoRef = useRef<Mesh>(null!);

  // States.
  const [clockwise, setClockwise] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setClockwise((state) => !state);
  };
  const pointerOutHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
  };
  const pointerOverHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(true);
  };

  useCursor(isHovered);

  useFrame(() => {
    // Rotation.
    const direction = clockwise ? 1 : -1;
    const angleDelta = direction * SPEED;
    logoRef.current.rotation.y += angleDelta;
  });

  return (
    <group name="Default Logo" {...props}>
      <primitive //
        object={scene}
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        ref={logoRef}
      />
    </group>
  );
};

export { LogoSingle as Logo };
