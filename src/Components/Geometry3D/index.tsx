import { ReactNode } from "react";

import { Box } from "Components/Geometry3D/Box";
import { Cone } from "Components/Geometry3D/Cone";
import { Cylinder } from "Components/Geometry3D/Cylinder";
import { RoundedBox } from "Components/Geometry3D/RoundedBox";
import { Dodecahedron } from "Components/Geometry3D/Dodecahedron";
import { Icosahedron } from "Components/Geometry3D/Icosahedron";
import { Octahedron } from "Components/Geometry3D/Octahedron";
import { Sphere } from "Components/Geometry3D/Sphere";
import { Tetrahedron } from "Components/Geometry3D/Tetrahedron";
import { Torus } from "Components/Geometry3D/Torus";
import { TorusKnot } from "Components/Geometry3D/TorusKnot";
import { useLeva } from "Hooks/Leva/Geometry3D";
import { Children } from "Types/Children";

enum GEOMETRY_3D {
  BOX = "Box",
  CONE = "Cone",
  CYLINDER = "Cylinder",
  DODECAHEDRON = "Dodecahedron",
  ICOSAHEDRON = "Icosahedron",
  NONE = "\u2014None\u2014",
  OCTAHEDRON = "Octahedron",
  ROUNDED_BOX = "RoundedBox",
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
    case GEOMETRY_3D.ROUNDED_BOX:
      element = <RoundedBox>{children}</RoundedBox>;
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
  const { geometry3DName } = useLeva(GEOMETRY_3D);

  return enableGeometry(geometry3DName, children);
};

export { Geometry3D };
