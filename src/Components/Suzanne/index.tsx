import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";

import { Material } from "Components/Material";

import suzanneSubdivisionSmoothShadingGlb from "./assets/suzanne_subdivision_smooth_shading.glb";

/**
 * Suzanne model.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Suzanne = forwardRef((props: GroupProps, ref: any): JSX.Element => {
  const { nodes }: any = useGLTF(suzanneSubdivisionSmoothShadingGlb, true);

  return (
    <group {...props}>
      <mesh geometry={nodes.Suzanne.geometry} ref={ref}>
        <Material />
      </mesh>
    </group>
  );
});

export { Suzanne };
