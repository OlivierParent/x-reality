import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";

import { PhysicalFrostedGlass } from "Components/Material/PhysicalFrostedGlass";

import suzanneDefaultFlatShadingGlb from "./assets/suzanne_default_flat_shading.glb";

/**
 * Suzanne model with frosted glass material.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const SuzanneFrostedGlass = forwardRef(
  (props: GroupProps, ref: any): JSX.Element => {
    const { nodes }: any = useGLTF(suzanneDefaultFlatShadingGlb, true);

    return (
      <group {...props}>
        <mesh geometry={nodes.Suzanne.geometry} ref={ref}>
          <PhysicalFrostedGlass />
        </mesh>
      </group>
    );
  }
);

export { SuzanneFrostedGlass };
