import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { MathUtils } from "three";

import cubeGlb from "Components/Texture/assets/BakedNormals.glb";

/**
 * Texture with Baked Normals.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const TextureBakedNormals = (props: GroupProps): React.JSX.Element => {
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

export { TextureBakedNormals as Texture };
