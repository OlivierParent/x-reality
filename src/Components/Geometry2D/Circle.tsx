import { Circle } from "@react-three/drei";
import { folder, useControls } from "leva";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLevaGeometryCircle as CircleGeometry } from "Settings/Leva/Geometry/Circle";
import { Children } from "Types/Children";

/**
 * Circle geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry
 */
const Geometry2DCircle = ({ children }: Children) => {
  const { radius, segments, θLength, θStart } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder({
        Circle: folder({
          "XY Plane": folder({
            radius: CircleGeometry.radius(),
            segments: CircleGeometry.segments(),
            Θ: folder({
              θStart: CircleGeometry.ΘStart(),
              θLength: CircleGeometry.ΘLength(),
            }),
          }),
        }),
      }),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
  );

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
