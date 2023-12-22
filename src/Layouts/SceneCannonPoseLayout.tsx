import { Debug, Physics } from "@react-three/cannon";
import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { useLeva as useLevaCanvas } from "Hooks/Leva/Layout/Canvas";
import { useLeva as useLevaPhysics } from "Hooks/Leva/Layout/Physics";
import { LayoutProps } from "Types/LayoutProps";

const CAMERA = { fov: 45, position: [7, 7, 7] } as const;

/**
 * Layout for a scene at an angle with Cannon-es physics engine.
 *
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */
const SceneCannonPoseLayout = ({ children }: LayoutProps): JSX.Element => {
  // Leva Controls.
  const canvasControls = useLevaCanvas();
  const physicsControls = useLevaPhysics();

  return (
    <>
      <Canvas
        camera={CAMERA}
        flat={canvasControls.flat}
        frameloop={canvasControls.frameloop}
        linear={canvasControls.linear}
        orthographic={false}
        shadows={canvasControls.shadows}
      >
        <Suspense>
          <Helpers />
          <Lighting />
          <OrbitControls
            enableDamping={true}
            enablePan={true}
            enableZoom={true}
          />
          <Physics
            gravity={[
              physicsControls.gravity.x,
              physicsControls.gravity.y,
              physicsControls.gravity.z,
            ]}
            isPaused={physicsControls.paused}
          >
            {physicsControls.showDebug ? (
              <Debug color={0xff00ff}>{children}</Debug>
            ) : (
              children
            )}
          </Physics>
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

export { SceneCannonPoseLayout as Layout };
