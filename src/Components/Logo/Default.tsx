import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

import gltfLogoGlb from "./assets/gltf-logo.glb";

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

  return (
    <group name="Default Logo" {...props}>
      <primitive
        object={scene}
        onClick={() => setClockwise((state) => !state)}
        ref={logoRef}
      />
    </group>
  );
};

export { LogoDefault };
