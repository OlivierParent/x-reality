import { Debug, Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { LEVA } from "Configs/leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
import { SettingsLevaPhysics } from "Settings/Leva/Physics";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a scene with Cannon-es physics engine.
 *
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */
const SceneCannonLayout = ({ children }: LayoutProps): JSX.Element => {
  const { flat, frameloop, linear, shadows } = useControls(
    LEVA.SCHEMA.CANVAS,
    {
      flat: SettingsLevaCanvas.flat(),
      frameloop: SettingsLevaCanvas.frameloop(),
      linear: SettingsLevaCanvas.linear(),
      shadows: SettingsLevaCanvas.shadows(true),
    },
    { collapsed: true, color: undefined, order: LEVA.ORDER.CANVAS }
  );
  const { gravity, paused, showDebug } = useControls(
    LEVA.SCHEMA.PHYSICS,
    {
      gravity: SettingsLevaPhysics.gravity(),
      paused: SettingsLevaPhysics.paused(),
      showDebug: SettingsLevaPhysics.showDebug(true),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.PHYSICS }
  );

  return (
    <>
      <Canvas
        camera={{ fov: 45, position: [7, 7, 7] }}
        flat={flat}
        frameloop={frameloop}
        linear={linear}
        orthographic={false}
        shadows={shadows}
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
            gravity={[gravity.x, gravity.y, gravity.z]}
            isPaused={paused}
          >
            {!showDebug && children}
            {showDebug && <Debug color={0xff00ff}>{children}</Debug>}
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
    </>
  );
};

export { SceneCannonLayout };