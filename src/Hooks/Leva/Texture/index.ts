import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(TEXTURE: any) {
  const { texturedMesh } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      texturedMesh: {
        label: "Type",
        options: {
          "Default      ": TEXTURE.DEFAULT,
          "Baked Normals": TEXTURE.BAKED_NORMALS,
          "Video        ": TEXTURE.VIDEO,
        },
        value: TEXTURE.DEFAULT,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    texturedMesh,
  };
}

export { useLeva };
