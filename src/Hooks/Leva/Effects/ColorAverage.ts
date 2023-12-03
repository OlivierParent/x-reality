import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsColorAverage as Effect } from "Settings/Leva/Effects/ColorAverage";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Color Average Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.NORMAL),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
  };
}

export { useLeva };
