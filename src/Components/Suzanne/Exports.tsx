import { useGLTF, Html } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import suzanneDefaultFlatShadingGlb from "./assets/suzanne_default_flat_shading.glb";
import suzanneDefaultSmoothShadingGlb from "./assets/suzanne_default_smooth_shading.glb";
import suzanneSubdivisionFlatShadingGlb from "./assets/suzanne_subdivision_flat_shading.glb";
import suzanneSubdivisionSmoothShadingGlb from "./assets/suzanne_subdivision_smooth_shading.glb";

import styles from "Styles/labels.module.css";

/**
 * Different Suzanne model exports from Blender.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const SuzanneExports = (props: GroupProps, ref: any): JSX.Element => {
  const { scene: sceneDefaultFlatShading }: any = useGLTF(
    suzanneDefaultFlatShadingGlb,
    true
  );
  const { scene: sceneDefaultSmoothShading }: any = useGLTF(
    suzanneDefaultSmoothShadingGlb,
    true
  );
  const { scene: sceneSubdivisionFlatShading }: any = useGLTF(
    suzanneSubdivisionFlatShadingGlb,
    true
  );
  const { scene: sceneSubdivisionSmoothShading }: any = useGLTF(
    suzanneSubdivisionSmoothShadingGlb,
    true
  );

  const htmlProps = {
    className: styles["label"],
    //  position: [0, -1.25, 0.5]
  };

  return (
    <group {...props}>
      <group position={[-4.5, 0, 0]}>
        <primitive object={sceneDefaultFlatShading} />
        <Html {...htmlProps} position={[0, -1.25, 0.5]}>
          <h2>Suzanne</h2>
          <p>Default</p>
          <p>Flat Shading</p>
          <p>70 kB</p>
        </Html>
      </group>
      <group position={[-1.5, 0, 0]}>
        <primitive object={sceneDefaultSmoothShading} />
        <Html {...htmlProps} position={[0, -1.25, 0.5]}>
          <h2>Suzanne</h2>
          <p>Default</p>
          <p>Smooth Shading</p>
          <p>25 kB</p>
        </Html>
      </group>
      <group position={[1.5, 0, 0]}>
        <primitive object={sceneSubdivisionFlatShading} />
        <Html {...htmlProps} position={[0, -1.25, 0.5]}>
          <h2>Suzanne</h2>
          <p>Subdivision Surface</p>
          <p>Flat Shading</p>
          <p>277 kB</p>
        </Html>
      </group>
      <group position={[4.5, 0, 0]}>
        <primitive object={sceneSubdivisionSmoothShading} />
        <Html {...htmlProps} position={[0, -1.25, 0.5]}>
          <h2>Suzanne</h2>
          <p>Subdivision Surface</p>
          <p>Smooth Shading</p>
          <p>118 kB</p>
        </Html>
      </group>
    </group>
  );
};

export { SuzanneExports };
