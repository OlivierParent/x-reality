import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense } from "react";

import { Effects } from "Components/Effects";
import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { FRAMELOOPS } from "Configs/frameloops";
import { useLeva as useLevaCanvas } from "Hooks/Leva/Layout/Canvas";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a default scene with no frameloops.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneLayoutFrameloopDemand = ({
  children,
}: LayoutProps): React.JSX.Element => {
  // Leva Controls.
  const canvasControls = useLevaCanvas();

  return (
    <>
      <Canvas
        camera={undefined}
        flat={canvasControls.flat}
        frameloop={FRAMELOOPS.DEMAND}
        linear={canvasControls.linear}
        orthographic={false}
        shadows={canvasControls.shadows}
      >
        <Suspense>
          <Effects />
          <Helpers />
          <Lighting />
          <OrbitControls
            enableDamping={true}
            enablePan={true}
            enableZoom={true}
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

export { SceneLayoutFrameloopDemand as Layout };
