import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Mesh } from "three";

import gltfLogoGlb from "./assets/gltf-logo.glb";

const LogoDouble = (props: GroupProps) => {
  const { scene }: any = useGLTF(gltfLogoGlb, true);
  const sceneClone = useMemo(() => scene.clone(true) as never, [scene]);
  const firstLogoRef = useRef<Mesh>(null!);
  const secondLogoRef = useRef<Mesh>(null!);
  const [clockwise, setClockwise] = useState(false);

  const speed = 0.025;
  const direction = clockwise ? 1 : -1;
  const angleDelta = direction * speed;

  useFrame(() => {
    firstLogoRef.current.rotation.x += angleDelta;
    secondLogoRef.current.rotation.y += angleDelta;
  });

  return (
    <group name="Double Logo" {...props}>
      <primitive
        object={scene}
        position={[-1, -1, 0]}
        onClick={() => setClockwise((state) => !state)}
        ref={firstLogoRef}
      />
      <primitive
        object={sceneClone}
        position={[1, 1, 0]}
        onClick={() => setClockwise((state) => !state)}
        ref={secondLogoRef}
      />
    </group>
  );
};

export { LogoDouble };
