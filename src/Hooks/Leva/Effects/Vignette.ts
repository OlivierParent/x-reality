import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsVignette as Effect } from "Settings/Leva/Effects/Vignette";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    darkness,
    eskil,
    offset,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Vignette Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.NORMAL),
            darkness: Effect.darkness(),
            eskil: Effect.eskil(),
            offset: Effect.offset(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    darkness,
    eskil,
    offset,
  };
}

export { useLeva };
