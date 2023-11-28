import { Debug, Physics } from "@react-three/cannon";
import { KeyboardControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, folder, useControls } from "leva";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { CursorOverlay } from "Components/UserInterface/CursorOverlay";
import { KEYBINDINGS } from "Configs/keybindings";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
import { SettingsLevaPhysics } from "Settings/Leva/Physics";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a scene with Cannon-es physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneCannonFirstPersonLayout = ({
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
          <KeyboardControls map={KEYBINDINGS.UNIVERSAL}>
            <Physics
              gravity={[gravity.x, gravity.y, gravity.z]}
              isPaused={paused}
            >
              {(!showDebug && children) ||
                (showDebug && (
                  <Debug color={0xff00ff} scale={showDebug ? 1 : 0}>
                    {children}
                  </Debug>
                ))}
            </Physics>
          </KeyboardControls>
        </Suspense>
      </Canvas>
      <CursorOverlay />
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

export { SceneCannonFirstPersonLayout as Layout };
