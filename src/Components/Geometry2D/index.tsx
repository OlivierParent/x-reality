import { folder, useControls } from "leva";
import { ReactNode } from "react";

import { Circle } from "Components/Geometry2D/Circle";
import { Plane } from "Components/Geometry2D/Plane";
import { Ring } from "Components/Geometry2D/Ring";
import { LEVA } from "Configs/leva";
import { Children } from "Types/Children";

enum GEOMETRY_2D {
  CIRCLE = "Circle",
  NONE = "None",
  PLANE = "Plane",
  RING = "Ring",
}

function enableGeometry(name: string, children: ReactNode) {
  let element;
  switch (name) {
    case GEOMETRY_2D.CIRCLE:
      element = <Circle>{children}</Circle>;
      break;
    case GEOMETRY_2D.PLANE:
      element = <Plane>{children}</Plane>;
      break;
    case GEOMETRY_2D.RING:
      element = <Ring>{children}</Ring>;
      break;
    default:
      element = <></>;
  }
  return element;
}

const Geometry2D = ({ children }: Children): JSX.Element => {
  const { geometry2DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder({
        geometry2DName: {
          label: "Geometry",
          options: GEOMETRY_2D,
          value: GEOMETRY_2D.PLANE,
        },
      }),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
  );

  return enableGeometry(geometry2DName, children);
};

export { Geometry2D };
