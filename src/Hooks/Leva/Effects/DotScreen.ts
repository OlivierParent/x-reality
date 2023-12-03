import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsDotScreen as Effect } from "Settings/Leva/Effects/DotScreen";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    angle, //
    blendFunction,
    scale,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Dot Screen Effect": folder({
            angle: Effect.angle(),
            blendFunction: Effect.blendFunction(BlendFunction.NORMAL),
            scale: Effect.scale(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    angle,
    blendFunction,
    scale,
  };
}

export { useLeva };
