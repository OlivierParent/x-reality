import { ReactNode } from "react";

import { Box } from "Components/Geometry3D/Box";
import { Cone } from "Components/Geometry3D/Cone";
import { Cylinder } from "Components/Geometry3D/Cylinder";
import { Dodecahedron } from "Components/Geometry3D/Dodecahedron";
import { Icosahedron } from "Components/Geometry3D/Icosahedron";
import { Octahedron } from "Components/Geometry3D/Octahedron";
import { RoundedBox } from "Components/Geometry3D/RoundedBox";
import { Sphere } from "Components/Geometry3D/Sphere";
import { Tetrahedron } from "Components/Geometry3D/Tetrahedron";
import { Torus } from "Components/Geometry3D/Torus";
import { TorusKnot } from "Components/Geometry3D/TorusKnot";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Geometry3D";
import { Children } from "Types/Children";

const LEVA_OPTIONS = {
  [LEVA_OPTION.NONE]: LEVA_OPTION.NONE,
  [LEVA_OPTION.BOX]: LEVA_OPTION.BOX,
  [LEVA_OPTION.ROUNDED_BOX]: LEVA_OPTION.ROUNDED_BOX,
  [LEVA_OPTION.CYLINDER]: LEVA_OPTION.CYLINDER,
  [LEVA_OPTION.CONE]: LEVA_OPTION.CONE,
  [LEVA_OPTION.TETRAHEDRON]: LEVA_OPTION.TETRAHEDRON,
  [LEVA_OPTION.OCTAHEDRON]: LEVA_OPTION.OCTAHEDRON,
  [LEVA_OPTION.DODECAHEDRON]: LEVA_OPTION.DODECAHEDRON,
  [LEVA_OPTION.ICOSAHEDRON]: LEVA_OPTION.ICOSAHEDRON,
  [LEVA_OPTION.SPHERE]: LEVA_OPTION.SPHERE,
  [LEVA_OPTION.TORUS]: LEVA_OPTION.TORUS,
  [LEVA_OPTION.TORUS_KNOT]: LEVA_OPTION.TORUS_KNOT,
} as const;

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
    case LEVA_OPTION.BOX:
      element = <Box>{children}</Box>;
      break;
    case LEVA_OPTION.CONE:
      element = <Cone>{children}</Cone>;
      break;
    case LEVA_OPTION.CYLINDER:
      element = <Cylinder>{children}</Cylinder>;
      break;
    case LEVA_OPTION.DODECAHEDRON:
      element = <Dodecahedron>{children}</Dodecahedron>;
      break;
    case LEVA_OPTION.ICOSAHEDRON:
      element = <Icosahedron>{children}</Icosahedron>;
      break;
    case LEVA_OPTION.OCTAHEDRON:
      element = <Octahedron>{children}</Octahedron>;
      break;
    case LEVA_OPTION.ROUNDED_BOX:
      element = <RoundedBox>{children}</RoundedBox>;
      break;
    case LEVA_OPTION.SPHERE:
      element = <Sphere>{children}</Sphere>;
      break;
    case LEVA_OPTION.TETRAHEDRON:
      element = <Tetrahedron>{children}</Tetrahedron>;
      break;
    case LEVA_OPTION.TORUS:
      element = <Torus>{children}</Torus>;
      break;
    case LEVA_OPTION.TORUS_KNOT:
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
  const { geometry3DName } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.BOX]
  );

  return enableGeometry(geometry3DName, children);
};

export { Geometry3D };
