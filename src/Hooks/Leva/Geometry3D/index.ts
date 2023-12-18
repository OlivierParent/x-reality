import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

enum LEVA_OPTION {
  BOX = "Box",
  CONE = "Cone",
  CYLINDER = "Cylinder",
  DODECAHEDRON = "Dodecahedron (12 faces)",
  ICOSAHEDRON = "Icosahedron",
  NONE = "\u2014None\u2014",
  OCTAHEDRON = "Octahedron (8 faces)",
  ROUNDED_BOX = "Rounded Box",
  SPHERE = "Sphere",
  TETRAHEDRON = "Tetrahedron (4 faces)",
  TORUS = "Torus",
  TORUS_KNOT = "Torus Knot",
}

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(options: any, value: any) {
  const { geometry3DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          geometry3DName: {
            label: "Geometry",
            options,
            value,
          },
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    geometry3DName: geometry3DName as unknown as string,
  };
}

export { LEVA_OPTION, useLeva };
