import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(GEOMETRY_3D: any) {
  const { geometry3DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          geometry3DName: {
            label: "Geometry",
            options: {
              "\u2014None\u2014": GEOMETRY_3D.NONE,
              "Box\u0000": GEOMETRY_3D.BOX,
              "Rounded Box": GEOMETRY_3D.ROUNDED_BOX,
              "Cylinder\u0000": GEOMETRY_3D.CYLINDER,
              "Cone\u0000": GEOMETRY_3D.CONE,
              "Tetrahedron (4 faces)": GEOMETRY_3D.TETRAHEDRON,
              "Octahedron (8 faces)": GEOMETRY_3D.OCTAHEDRON,
              "Dodecahedron (12 faces)": GEOMETRY_3D.DODECAHEDRON,
              "Icosahedron (20 faces)": GEOMETRY_3D.ICOSAHEDRON,
              "Sphere\u0000": GEOMETRY_3D.SPHERE,
              "Torus\u0000": GEOMETRY_3D.TORUS,
              "Torus Knot": GEOMETRY_3D.TORUS_KNOT,
            },
            value: GEOMETRY_3D.BOX,
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

export { useLeva };
