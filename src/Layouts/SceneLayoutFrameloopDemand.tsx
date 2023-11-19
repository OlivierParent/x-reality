import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { folder, Leva, useControls } from "leva";
import { Suspense } from "react";

import { Effects } from "Components/Effects";
import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { FRAMELOOPS } from "Configs/frameloops";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
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
  const { flat, linear, shadows } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Canvas: folder(
        {
          flat: SettingsLevaCanvas.flat(),
          linear: SettingsLevaCanvas.linear(),
          shadows: SettingsLevaCanvas.shadows(true),
        },
        Settings.folder(LEVA.ORDER.CANVAS)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );

  return (
    <>
      <Canvas
        camera={undefined}
        flat={flat}
        frameloop={FRAMELOOPS.DEMAND}
        linear={linear}
        orthographic={false}
        shadows={shadows}
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
