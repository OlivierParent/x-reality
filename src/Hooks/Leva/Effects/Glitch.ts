import { folder, useControls } from "leva";
import { BlendFunction } from "postprocessing";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaEffectsGlitch as Effect } from "Settings/Leva/Effects/Glitch";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    active,
    blendFunction,
    columns,
    delay,
    dtSize,
    duration,
    mode,
    ratio,
    strength,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      "Effects Composer": folder(
        {
          "Glitch Effect": folder({
            active: Effect.active(),
            blendFunction: Effect.blendFunction(BlendFunction.NORMAL),
            columns: Effect.columns(),
            delay: Effect.delay(),
            dtSize: Effect.dtSize(),
            duration: Effect.duration(),
            mode: Effect.mode(),
            ratio: Effect.ratio(),
            strength: Effect.strength(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.EFFECTS_COMPOSER)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    active,
    blendFunction,
    columns,
    delay,
    dtSize,
    duration,
    mode,
    ratio,
    strength,
  };
}

export { useLeva };
