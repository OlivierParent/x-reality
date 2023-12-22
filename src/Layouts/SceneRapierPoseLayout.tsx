import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { useLeva as useLevaCanvas } from "Hooks/Leva/Layout/Canvas";
import { useLeva as useLevaPhysics } from "Hooks/Leva/Layout/Physics";
import { LayoutProps } from "Types/LayoutProps";

const CAMERA = { fov: 45, position: [7, 7, 7] } as const;

/**
 * Layout for a scene at an angle with Rapier physics engine.
 *
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */
const SceneRapierPoseLayout = ({ children }: LayoutProps): JSX.Element => {
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
            colliders={undefined}
            debug={physicsControls.showDebug}
            gravity={[
              physicsControls.gravity.x,
              physicsControls.gravity.y,
              physicsControls.gravity.z,
            ]}
            paused={physicsControls.paused}
            timeStep="vary"
            updatePriority={undefined}
          >
            {children}
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

export { SceneRapierPoseLayout as Layout };
