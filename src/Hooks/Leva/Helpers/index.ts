import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaHelpers as Helpers } from "Settings/Leva/Helpers";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  // Leva Controls.
  const {
    axesHelper, //
    gizmoHelper,
    gridHelper,
    polarGridHelper,
    stats,
  } = useControls(
    LEVA.SCHEMA.GENERAL,
    {
      Helpers: folder(
        {
          axesHelper: Helpers.axesHelper(),
          gizmoHelper: Helpers.gizmoHelper(true),
          gridHelper: Helpers.gridHelper(),
          polarGridHelper: Helpers.polarGridHelper(),
          stats: Helpers.stats(),
        },
        SettingsLeva.folder(LEVA.ORDER.HELPERS)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.GENERAL)
  );

  return {
    axesHelper,
    gizmoHelper,
    gridHelper,
    polarGridHelper,
    stats,
  };
}

export { useLeva };
