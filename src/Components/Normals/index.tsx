import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

import normalsGlb from "Components/Normals/assets/normals.glb";

/**
 * Normals.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Normals = (props: GroupProps) => {
  const { scene }: any = useGLTF(normalsGlb, true);

  // References.
  const normalsRef = useRef<Mesh>(null!);

  useFrame(() => {
    normalsRef.current.rotation.x += 0.02;
  });

  return (
    <group name="Normals" {...props}>
      <primitive object={scene} ref={normalsRef} />
    </group>
  );
};

export { Normals };
