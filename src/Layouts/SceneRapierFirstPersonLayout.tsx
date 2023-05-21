import { KeyboardControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva, folder, useControls } from "leva";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { UserInterfaceCursorOverlay as Cursor } from "Components/UserInterface/CursorOverlay";
import { KEYBINDINGS } from "Configs/keybindings";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaCanvas } from "Settings/Leva/Canvas";
import { SettingsLevaPhysics } from "Settings/Leva/Physics";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a scene with Rapier physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */
const SceneRapierFirstPersonLayout = ({
  children,
}: LayoutProps): JSX.Element => {
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
        Settings.folder(LEVA.ORDER.CANVAS)
      ),
    },
    Settings.folder(LEVA.ORDER.GENERAL)
  );
  const { gravity, paused, showDebug } = useControls(
    LEVA.SCHEMA.PHYSICS,
    {
      gravity: SettingsLevaPhysics.gravity(),
      paused: SettingsLevaPhysics.paused(),
      showDebug: SettingsLevaPhysics.showDebug(true),
    },
    Settings.folder(LEVA.ORDER.PHYSICS)
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
              colliders={undefined}
              debug={showDebug}
              gravity={[gravity.x, gravity.y, gravity.z]}
              paused={paused}
              timeStep="vary"
              updatePriority={undefined}
            >
              {children}
            </Physics>
          </KeyboardControls>
        </Suspense>
      </Canvas>
      <Cursor />
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

export { SceneRapierFirstPersonLayout };
