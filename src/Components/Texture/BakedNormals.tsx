import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { MathUtils } from "three";

import cubeGlb from "./assets/BakedNormals.glb";

const TextureBakedNormals = (props: GroupProps) => {
  const { nodes, materials }: any = useGLTF(cubeGlb, true);
  return (
    <group name="Texture with Baked Normals" {...props}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material"]}
        rotation={
          [90, 0, 0].map((degree) => MathUtils.degToRad(degree)) as [
            number,
            number,
            number
          ]
        }
      />
    </group>
  );
};

export { TextureBakedNormals };
