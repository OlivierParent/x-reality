import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { forwardRef } from "react";

import { Material } from "Components/Material/PhysicalFrostedGlass";

import suzanneDefaultFlatShadingGlb from "Components/Suzanne/assets/suzanne_default_flat_shading_compressed.glb";

/**
 * Suzanne model with frosted glass material.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const SuzanneFrostedGlass = forwardRef(
  (props: GroupProps, ref: any): React.JSX.Element => {
    const { nodes }: any = useGLTF(suzanneDefaultFlatShadingGlb, true);

    return (
      <group {...props}>
        <mesh geometry={nodes.Suzanne.geometry} ref={ref}>
          <Material />
        </mesh>
      </group>
    );
  }
);

export { SuzanneFrostedGlass };
