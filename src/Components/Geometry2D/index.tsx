import { folder, useControls } from "leva";
import { ReactNode } from "react";

import { Circle } from "Components/Geometry2D/Circle";
import { Plane } from "Components/Geometry2D/Plane";
import { Ring } from "Components/Geometry2D/Ring";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { Children } from "Types/Children";

enum GEOMETRY_2D {
  CIRCLE = "Circle",
  NONE = "None",
  PLANE = "Plane",
  RING = "Ring",
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

/**
 * 2D Geometry.
 *
 * @returns {React.JSX.Element}
 */
const Geometry2D = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const { geometry2DName } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          geometry2DName: {
            label: "Geometry 2D",
            options: {
              "–None– ": GEOMETRY_2D.NONE,
              "Plane  ": GEOMETRY_2D.PLANE,
              "Circle ": GEOMETRY_2D.CIRCLE,
              "Ring   ": GEOMETRY_2D.RING,
            },
            value: GEOMETRY_2D.PLANE,
          },
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return enableGeometry(geometry2DName, children);
};

export { Geometry2D };
