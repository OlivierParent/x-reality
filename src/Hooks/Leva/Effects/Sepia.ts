import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsSepia as Effect } from "Settings/Leva/Effects/Sepia";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    intensity,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Sepia Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.NORMAL),
            intensity: Effect.intensity(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    intensity,
  };
}

export { useLeva };
