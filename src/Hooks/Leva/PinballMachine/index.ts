import { useControls } from "leva";

import { LEVA } from "Configs/leva";

enum LEVA_OPTION {
  RESET = "Reset",
  RESTORE_SNAPSHOT = "Restore Snapshot",
  STORE_SNAPSHOT = "Store Snapshot",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any) {
  useControls(LEVA.SCHEMA.SIMULATION, options, {
    order: LEVA.ORDER.SIMULATION,
  });
}

export { LEVA_OPTION, useLeva };
