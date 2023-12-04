import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import cubeGlb from "Components/TexturedMesh/assets/TexturedCube.glb";

/**
 * Mesh with Texture.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const TexturedMeshDefault = (props: GroupProps): React.JSX.Element => {
  const { nodes, materials }: any = useGLTF(cubeGlb, true);

  return (
    <group name="Textured Mesh Default" {...props}>
      <group position={[-1.5, 0, 0]}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials["MaterialTexture"]}
        />
        <mesh //
          geometry={nodes.Cube_2.geometry}
          material={materials["Blue"]}
        />
      </group>
      {nodes.Cube.children.map((child: any, index: number) => {
        return (
          <mesh
            key={index}
            geometry={child.geometry}
            material={child.material}
            position={[1.5, 0, 0]}
          />
        );
      })}
    </group>
  );
};

export { TexturedMeshDefault as TexturedMesh };
