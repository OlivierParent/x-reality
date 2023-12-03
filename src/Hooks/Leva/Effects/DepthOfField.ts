import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsDepthOfField as Effect } from "Settings/Leva/Effects/DepthOfField";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    blendFunction, //
    bokehScale,
    focalLength,
    focusDistance,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Bloom Effect": folder({
            blendFunction: Effect.blendFunction(BlendFunction.NORMAL),
            bokehScale: Effect.bokehScale(),
            focalLength: Effect.focalLength(),
            focusDistance: Effect.focusDistance(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    blendFunction,
    bokehScale,
    focalLength,
    focusDistance,
  };
}

export { useLeva };
