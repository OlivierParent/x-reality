import { useGLTF } from "@react-three/drei";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";

import gltfLogoGlb from "Components/Logo/assets/gltf-logo.glb";

const SPEED = 0.025;

/**
 * Single Logo.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const LogoSingle = (props: GroupProps): React.JSX.Element => {
  const { scene }: any = useGLTF(gltfLogoGlb, true);

  // References.
  const logoRef = useRef<Mesh>(null!);

  // States.
  const [clockwise, setClockwise] = useState(false);
  const [hover, setHover] = useState(false);

  // Event handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setClockwise((state) => !state);
  };
  const pointerOutHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setHover(false);
  };
  const pointerOverHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setHover(true);
  };

  useEffect(() => {
    // Cursor.
    const cursor = hover ? "pointer" : "default";
    window.document.body.style.setProperty("cursor", cursor);
  }, [hover]);

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
