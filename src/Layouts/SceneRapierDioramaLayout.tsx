import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva, folder, useControls } from "leva";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
import { SettingsLevaPhysics } from "Settings/Leva/Physics";
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
  const { flat, frameloop, linear, shadows } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Canvas: folder(
        {
          flat: SettingsLevaCanvas.flat(),
          frameloop: SettingsLevaCanvas.frameloop(),
          linear: SettingsLevaCanvas.linear(),
          shadows: SettingsLevaCanvas.shadows(true),
        },
        SettingsLeva.folder(LEVA.ORDER.CANVAS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );
  const { gravity, paused, showDebug } = useControls(
    LEVA.SCHEMA.PHYSICS,
    {
      gravity: SettingsLevaPhysics.gravity(),
      paused: SettingsLevaPhysics.paused(),
      showDebug: SettingsLevaPhysics.showDebug(true),
    },
    SettingsLeva.folder(LEVA.ORDER.PHYSICS)
  );

  return (
    <>
      <Canvas
        camera={undefined}
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
            maxAzimuthAngle={ANGLE.AZIMUTH.MAX}
            maxPolarAngle={ANGLE.POLAR.MAX}
            minAzimuthAngle={ANGLE.AZIMUTH.MIN}
            minPolarAngle={ANGLE.POLAR.MIN}
          />
          <Physics
            colliders={undefined}
            debug={showDebug}
            gravity={[gravity.x, gravity.y, gravity.z]}
            paused={paused}
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
