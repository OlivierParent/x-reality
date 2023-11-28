import { Clone, Html, useFBX, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import suzanneDefaultAutosmoothShadingGlb from "Components/Suzanne/assets/suzanne_default_autosmooth_shading_compressed.glb";
import suzanneDefaultFlatShadingGlb from "Components/Suzanne/assets/suzanne_default_flat_shading_compressed.glb";
import suzanneDefaultSmoothShadingGlb from "Components/Suzanne/assets/suzanne_default_smooth_shading_compressed.glb";
import suzanneSubdivisionAutosmoothShadingGlb from "Components/Suzanne/assets/suzanne_subdivision_autosmooth_shading_compressed.glb";
import suzanneSubdivisionFlatShadingGlb from "Components/Suzanne/assets/suzanne_subdivision_flat_shading_compressed.glb";
import suzanneSubdivisionSmoothShadingFbx from "Components/Suzanne/assets/suzanne_subdivision_smooth_shading.fbx";
import suzanneSubdivisionSmoothShadingGlb from "Components/Suzanne/assets/suzanne_subdivision_smooth_shading_compressed.glb";

import styles from "Styles/labels.module.css";

/**
 * Different Suzanne model exports from Blender.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const SuzanneExports = (props: GroupProps, ref: any): React.JSX.Element => {
  const { scene: sceneDefaultFlatShading }: any = useGLTF(
    suzanneDefaultFlatShadingGlb,
    true
  );
  const { scene: sceneDefaultAutosmoothShading }: any = useGLTF(
    suzanneDefaultAutosmoothShadingGlb,
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
  const { scene: sceneSubdivisionAutosmoothShading }: any = useGLTF(
    suzanneSubdivisionAutosmoothShadingGlb,
    true
  );
  const { scene: sceneSubdivisionSmoothShading }: any = useGLTF(
    suzanneSubdivisionSmoothShadingGlb,
    true
  );
  const sceneSubdivisionSmoothShadingFbx = useFBX(
    suzanneSubdivisionSmoothShadingFbx
  );

  const htmlProps = {
    className: styles["label"],
    distanceFactor: 10,
  };

  return (
    <group {...props}>
      <group position={[-3.0, 0, 3.0]}>
        <Clone object={sceneDefaultFlatShading} />
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Clone (GLB)</h2>
          <p>Default</p>
          <p>Flat Shading</p>
          <p>14kB (compressed)</p>
        </Html>
      </group>
      <group position={[-3.0, 0, 0]}>
        <primitive object={sceneDefaultFlatShading} />
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Suzanne (GLB)</h2>
          <p>Default</p>
          <p>Flat Shading</p>
          <p>14kB (compressed)</p>
        </Html>
      </group>
      <group position={[0, 0, 0]}>
        <primitive object={sceneDefaultAutosmoothShading} />
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Suzanne (GLB)</h2>
          <p>Default</p>
          <p>Autosmooth Shading</p>
          <p>11kB (compressed)</p>
        </Html>
      </group>
      <group position={[3.0, 0, 0]}>
        <primitive object={sceneDefaultSmoothShading} />
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Suzanne (GLB)</h2>
          <p>Default</p>
          <p>Smooth Shading</p>
          <p>6kB (compressed)</p>
        </Html>
      </group>
      <group position={[-3.0, 0, -3.0]}>
        <primitive object={sceneSubdivisionFlatShading} />
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Suzanne (GLB)</h2>
          <p>Subdivision Surface</p>
          <p>Flat Shading</p>
          <p>55kB (compressed)</p>
        </Html>
      </group>
      <group position={[0, 0, -3.0]}>
        <primitive object={sceneSubdivisionAutosmoothShading} />
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Suzanne (GLB)</h2>
          <p>Subdivision Surface</p>
          <p>Autosmooth Shading</p>
          <p>29kB (compressed)</p>
        </Html>
      </group>
      <group position={[3.0, 0, -3.0]}>
        <primitive object={sceneSubdivisionSmoothShading} />
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Suzanne (GLB)</h2>
          <p>Subdivision Surface</p>
          <p>Smooth Shading</p>
          <p>27kB (compressed)</p>
        </Html>
      </group>
      <group position={[3.0, 0, -6.0]}>
        <group scale={0.01}>
          <primitive object={sceneSubdivisionSmoothShadingFbx} />
        </group>
        <Html //
          position={[0, -1.25, 0.5]}
          {...htmlProps}
        >
          <h2>Suzanne (FBX)</h2>
          <p>Subdivision Surface</p>
          <p>Smooth Shading</p>
          <p>123kB</p>
        </Html>
      </group>
    </group>
  );
};

export { SuzanneExports };
