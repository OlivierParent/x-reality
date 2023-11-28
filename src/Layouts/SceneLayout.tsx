import { Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { folder, Leva, useControls } from "leva";
import { Suspense } from "react";

import { Effects } from "Components/Effects";
import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a default scene.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneLayout = ({ children }: LayoutProps): React.JSX.Element => {
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

export { SceneLayout as Layout };
