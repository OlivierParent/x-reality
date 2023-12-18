import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense } from "react";

import { Effects } from "Components/Effects";
import { Helpers } from "Components/Helpers";
import { useLeva as useLevaCanvas } from "Hooks/Leva/Layout/Canvas";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a default scene.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneLayout = ({ children }: LayoutProps): React.JSX.Element => {
  // Leva Controls.
  const canvasControls = useLevaCanvas();

  return (
    <>
      <Canvas
        camera={undefined}
        flat={canvasControls.flat}
        frameloop="demand"
        linear={canvasControls.linear}
        orthographic={false}
        shadows={canvasControls.shadows}
      >
        <Suspense>
          <Effects />
          <Helpers />
          <OrbitControls
            autoRotate={false}
            autoRotateSpeed={0.5}
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
            maxDistance={100}
            minDistance={0}
            minPolarAngle={0}
            minZoom={0}
            mouseButtons={{
              LEFT: 2,
              MIDDLE: 1,
              RIGHT: 0,
            }}
            panSpeed={0.5}
            rotateSpeed={0.5}
            screenSpacePanning={false}
            target={[0, 0, 0]}
            zoomSpeed={0.5}
          />
          {children}
        </Suspense>
      </Canvas>
      <Leva
        collapsed={false}
        fill={false}
        flat={false}
        hidden={false}
        oneLineLabels={true}
        titleBar={true}
      />
      <Loader />
    </>
  );
};

export { SceneLayout as Layout };
