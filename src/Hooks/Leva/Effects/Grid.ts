import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsGrid as Effect } from "Settings/Leva/Effects/Grid";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    lineWidth,
    scale,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Grid Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.NORMAL),
            lineWidth: Effect.lineWidth(),
            scale: Effect.scale(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    lineWidth,
    scale,
  };
}

export { useLeva };
