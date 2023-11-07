import { useGLTF } from "@react-three/drei";
import { GroupProps, ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

import gltfLogoGlb from "Components/Logo/assets/gltf-logo.glb";

const LogoDefault = (props: GroupProps) => {
  const { scene }: any = useGLTF(gltfLogoGlb, true);
  const logoRef = useRef<Mesh>(null!);
  const [clockwise, setClockwise] = useState(false);

  const direction = clockwise ? 1 : -1;
  const speed = 0.025;
  const angleDelta = direction * speed;

  useFrame(() => {
    logoRef.current.rotation.y += angleDelta;
  });

  // Event handlers.
  const clickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    setClockwise((state) => !state);
  };

  return (
    <group name="Default Logo" {...props}>
      <primitive object={scene} onClick={clickHandler} ref={logoRef} />
    </group>
  );
};

export { LogoDefault as Logo };
