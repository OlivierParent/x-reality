import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsPixelation as Effect } from "Settings/Leva/Effects/Pixelation";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    granularity, //
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Pixelation Effect": folder({
            granularity: Effect.granularity(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    granularity,
  };
}

export { useLeva };
