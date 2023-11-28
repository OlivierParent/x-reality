import { LEVA } from "Configs/leva";
import { folder, useControls } from "leva";
import { ReactNode } from "react";

import { Box } from "Components/Geometry3D/Box";
import { Cone } from "Components/Geometry3D/Cone";
import { Cylinder } from "Components/Geometry3D/Cylinder";
import { Dodecahedron } from "Components/Geometry3D/Dodecahedron";
import { Icosahedron } from "Components/Geometry3D/Icosahedron";
import { Octahedron } from "Components/Geometry3D/Octahedron";
import { Sphere } from "Components/Geometry3D/Sphere";
import { Tetrahedron } from "Components/Geometry3D/Tetrahedron";
import { Torus } from "Components/Geometry3D/Torus";
import { TorusKnot } from "Components/Geometry3D/TorusKnot";
import { SettingsLeva } from "Settings/Leva";
import { Children } from "Types/Children";

enum GEOMETRY_3D {
  BOX = "Box",
  CONE = "Cone",
  CYLINDER = "Cylinder",
  DODECAHEDRON = "Dodecahedron",
  ICOSAHEDRON = "Icosahedron",
  NONE = "None",
  OCTAHEDRON = "Octahedron",
  SPHERE = "Sphere",
  TETRAHEDRON = "Tetrahedron",
  TORUS = "Torus",
  TORUS_KNOT = "TorusKnot",
}

/**
 * Enable geometry component.
 *
 * @param {string} name
 * @param {ReactNode} children
 * @returns {React.JSX.Element}
 */
function enableGeometry(name: string, children: ReactNode): React.JSX.Element {
  let element: React.JSX.Element;
  switch (name) {
    case GEOMETRY_3D.BOX:
      element = <Box>{children}</Box>;
      break;
    case GEOMETRY_3D.CONE:
      element = <Cone>{children}</Cone>;
      break;
    case GEOMETRY_3D.CYLINDER:
      element = <Cylinder>{children}</Cylinder>;
      break;
    case GEOMETRY_3D.DODECAHEDRON:
      element = <Dodecahedron>{children}</Dodecahedron>;
      break;
    case GEOMETRY_3D.ICOSAHEDRON:
      element = <Icosahedron>{children}</Icosahedron>;
      break;
    case GEOMETRY_3D.OCTAHEDRON:
      element = <Octahedron>{children}</Octahedron>;
      break;
    case GEOMETRY_3D.SPHERE:
      element = <Sphere>{children}</Sphere>;
      break;
    case GEOMETRY_3D.TETRAHEDRON:
      element = <Tetrahedron>{children}</Tetrahedron>;
      break;
    case GEOMETRY_3D.TORUS:
      element = <Torus>{children}</Torus>;
      break;
    case GEOMETRY_3D.TORUS_KNOT:
      element = <TorusKnot>{children}</TorusKnot>;
      break;
    default:
      element = <></>;
  }

  return element;
}

/**
 * 3D Geometry.
 *
 * @returns {React.JSX.Element}
 */
const Geometry3D = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const { geometry3DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          geometry3DName: {
            label: "Geometry",
            options: {
              "–None–                 ": GEOMETRY_3D.NONE,
              "Box                    ": GEOMETRY_3D.BOX,
              "Cylinder               ": GEOMETRY_3D.CYLINDER,
              "Cone                   ": GEOMETRY_3D.CONE,
              "Tetrahedron (4 faces)  ": GEOMETRY_3D.TETRAHEDRON,
              "Octahedron (8 faces)   ": GEOMETRY_3D.OCTAHEDRON,
              "Dodecahedron (12 faces)": GEOMETRY_3D.DODECAHEDRON,
              "Icosahedron (20 faces) ": GEOMETRY_3D.ICOSAHEDRON,
              "Sphere                 ": GEOMETRY_3D.SPHERE,
              "Torus                  ": GEOMETRY_3D.TORUS,
              "Torus Knot             ": GEOMETRY_3D.TORUS_KNOT,
            },
            value: GEOMETRY_3D.BOX,
          },
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return enableGeometry(geometry3DName, children);
};

export { Geometry3D };
