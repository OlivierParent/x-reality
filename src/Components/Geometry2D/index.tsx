import { ReactNode } from "react";

import { Circle } from "Components/Geometry2D/Circle";
import { Plane } from "Components/Geometry2D/Plane";
import { Ring } from "Components/Geometry2D/Ring";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Geometry2D";
import { Children } from "Types/Children";

const LEVA_OPTIONS = {
  [LEVA_OPTION.NONE]: LEVA_OPTION.NONE,
  [LEVA_OPTION.PLANE]: LEVA_OPTION.PLANE,
  [LEVA_OPTION.CIRCLE]: LEVA_OPTION.CIRCLE,
  [LEVA_OPTION.RING]: LEVA_OPTION.RING,
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
    case LEVA_OPTION.CIRCLE:
      element = <Circle>{children}</Circle>;
      break;
    case LEVA_OPTION.PLANE:
      element = <Plane>{children}</Plane>;
      break;
    case LEVA_OPTION.RING:
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
  const { geometry2DName } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.PLANE]
  );

  return <>{enableGeometry(geometry2DName, children)}</>;
};

export { Geometry2D };
