import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaPhysics as Physics } from "Settings/Leva/Physics";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    gravity, //
    paused,
    showDebug,
  } = useControls(
    LEVA.SCHEMA.PHYSICS,
    {
      gravity: Physics.gravity(),
      paused: Physics.paused(),
      showDebug: Physics.showDebug(true),
    },
    SettingsLeva.folder(LEVA.ORDER.PHYSICS)
  );

  return {
    gravity,
    paused,
    showDebug,
  };
}

export { useLeva };
