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

const ANGLE = {
  AZIMUTH: {
    MAX: 0,
    MIN: -Math.PI / 2,
  },
  POLAR: {
    MAX: Math.PI / 2 + Math.PI / 9,
    MIN: 0,
  },
} as const;

/**
 * Layout for a diorama scene with Rapier physics engine.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneRapierDioramaLayout = ({
  children,
}: LayoutProps): React.JSX.Element => {
  // Leva Controls.
  const canvasControls = useLevaCanvas();
  const physicsControls = useLevaPhysics();

  return (
    <>
      <Canvas
        camera={undefined}
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
            maxAzimuthAngle={ANGLE.AZIMUTH.MAX}
            maxPolarAngle={ANGLE.POLAR.MAX}
            minAzimuthAngle={ANGLE.AZIMUTH.MIN}
            minPolarAngle={ANGLE.POLAR.MIN}
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

export { SceneRapierDioramaLayout as Layout };
