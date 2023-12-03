import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaCanvas as Canvas } from "Settings/Leva/Canvas";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    flat, //
    frameloop,
    linear,
    shadows,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Canvas: folder(
        {
          flat: Canvas.flat(),
          frameloop: Canvas.frameloop(),
          linear: Canvas.linear(),
          shadows: Canvas.shadows(true),
        },
        SettingsLeva.folder(LEVA.ORDER.CANVAS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    flat,
    frameloop,
    linear,
    shadows,
  };
}

export { useLeva };
