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
import { SettingsLeva as Settings } from "Settings/Leva";
import { Children } from "Types/Children";

const GEOMETRY_3D = Object.freeze({
  Box: "Box",
  Cone: "Cone",
  Cylinder: "Cylinder",
  Dodecahedron: "Dodecahedron",
  Icosahedron: "Icosahedron",
  None: "None",
  Octahedron: "Octahedron",
  Sphere: "Sphere",
  Tetrahedron: "Tetrahedron",
  Torus: "Torus",
  TorusKnot: "TorusKnot",
});

function enableGeometry(name: string, children: ReactNode) {
  let element;
  switch (name) {
    case GEOMETRY_3D.Box:
      element = <Box>{children}</Box>;
      break;
    case GEOMETRY_3D.Cone:
      element = <Cone>{children}</Cone>;
      break;
    case GEOMETRY_3D.Cylinder:
      element = <Cylinder>{children}</Cylinder>;
      break;
    case GEOMETRY_3D.Dodecahedron:
      element = <Dodecahedron>{children}</Dodecahedron>;
      break;
    case GEOMETRY_3D.Icosahedron:
      element = <Icosahedron>{children}</Icosahedron>;
      break;
    case GEOMETRY_3D.Octahedron:
      element = <Octahedron>{children}</Octahedron>;
      break;
    case GEOMETRY_3D.Sphere:
      element = <Sphere>{children}</Sphere>;
      break;
    case GEOMETRY_3D.Tetrahedron:
      element = <Tetrahedron>{children}</Tetrahedron>;
      break;
    case GEOMETRY_3D.Torus:
      element = <Torus>{children}</Torus>;
      break;
    case GEOMETRY_3D.TorusKnot:
      element = <TorusKnot>{children}</TorusKnot>;
      break;
    default:
      element = <></>;
  }
  return element;
}

const Geometry3D = ({ children }: Children): JSX.Element => {
  const { geometry3DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          geometry3DName: {
            label: "Geometry",
            options: {
              "Box                    ": GEOMETRY_3D.Box,
              "Cone                   ": GEOMETRY_3D.Cone,
              "Cylinder               ": GEOMETRY_3D.Cylinder,
              "Tetrahedron (4 faces)  ": GEOMETRY_3D.Tetrahedron,
              "Octahedron (8 faces)   ": GEOMETRY_3D.Octahedron,
              "Dodecahedron (12 faces)": GEOMETRY_3D.Dodecahedron,
              "Icosahedron (20 faces) ": GEOMETRY_3D.Icosahedron,
              "Sphere                 ": GEOMETRY_3D.Sphere,
              "Torus                  ": GEOMETRY_3D.Torus,
              "Torus Knot             ": GEOMETRY_3D.TorusKnot,
            },
            value: GEOMETRY_3D.Box,
          },
        },
        Settings.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return enableGeometry(geometry3DName, children);
};

export { Geometry3D };
