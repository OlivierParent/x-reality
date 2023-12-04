import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { MathUtils } from "three";

import cubeGlb from "Components/TexturedMesh/assets/BakedNormals.glb";

/**
 * Mesh with Baked Normals Texture.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const TexturedMeshBakedNormals = (props: GroupProps): React.JSX.Element => {
  const { nodes, materials }: any = useGLTF(cubeGlb, true);

  return (
    <group name="Mesh with Baked Normals Texture" {...props}>
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

export { TexturedMeshBakedNormals as TexturedMesh };
