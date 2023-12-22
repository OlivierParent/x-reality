import { useCursor, useGLTF } from "@react-three/drei";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Mesh } from "three";

import gltfLogoGlb from "Components/Logo/assets/gltf-logo.glb";

/**
 * Double Logo.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const LogoDouble = (props: GroupProps): JSX.Element => {
  const { scene }: any = useGLTF(gltfLogoGlb, true);
  const sceneClone = useMemo(() => scene.clone(true) as never, [scene]);

  // References.
  const firstLogoRef = useRef<Mesh>(null!);
  const secondLogoRef = useRef<Mesh>(null!);

  // States.
  const [clockwise, setClockwise] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const speed = 0.025;
  const direction = clockwise ? 1 : -1;
  const angleDelta = direction * speed;

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

  // Cursor on hover.
  useCursor(isHovered);

  useFrame(() => {
    // Rotation.
    firstLogoRef.current.rotation.x += angleDelta;
    secondLogoRef.current.rotation.y += angleDelta;
  });

  return (
    <group name="Double Logo" {...props}>
      <primitive
        object={scene}
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        position={[-1, -1, 0]}
        ref={firstLogoRef}
      />
      <primitive
        object={sceneClone}
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        position={[1, 1, 0]}
        ref={secondLogoRef}
      />
    </group>
  );
};

export { LogoDouble as Logo };
