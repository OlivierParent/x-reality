import { KeyboardControls, Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { Suspense } from "react";

import { Helpers } from "Components/Helpers";
import { Lighting } from "Components/Lighting";
import { CursorOverlay } from "Components/UserInterface/CursorOverlay";
import { KEYBINDINGS } from "Configs/keybindings";
import { useLeva as useLevaCanvas } from "Hooks/Leva/Layout/Canvas";
import { useLeva as useLevaPhysics } from "Hooks/Leva/Layout/Physics";
import { LayoutProps } from "Types/LayoutProps";

/**
 * Layout for a scene with Rapier physics engine for First Person view.
 *
 * @param {LayoutProps} props
 * @returns {React.JSX.Element}
 */
const SceneRapierFirstPersonLayout = ({
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
          <KeyboardControls map={KEYBINDINGS.UNIVERSAL}>
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

export { SceneRapierFirstPersonLayout as Layout };
