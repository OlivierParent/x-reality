import { Circle } from "@react-three/drei";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry2D/Circle";
import { Children } from "Types/Children";

/**
 * Circle geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry
 *
 * @returns {JSX.Element}
 */
const Geometry2DCircle = ({ children }: Children): JSX.Element => {
  // Leva Controls.
  const {
    radius, //
    segments,
    θLength,
    θStart,
  } = useLeva();

  return (
    <Circle
      args={[
        radius,
        segments,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Circle>
  );
};

export { Geometry2DCircle as Circle };
