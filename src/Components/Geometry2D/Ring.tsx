import { Ring } from "@react-three/drei";
import { folder, useControls } from "leva";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLevaGeometryRing as RingGeometry } from "Settings/Leva/Geometry/Ring";
import { Children } from "Types/Children";

/**
 * Ring geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/RingGeometry
 */
const Geometry2DRing = ({ children }: Children) => {
  const { innerRadius, outerRadius, θLength, θSegments, θStart, φSegments } =
    useControls(
      LEVA.SCHEMA.COMPONENTS,
      {
        Geometry: folder({
          Ring: folder({
            "XY Plane": folder({
              innerRadius: RingGeometry.innerRadius(),
              outerRadius: RingGeometry.outerRadius(),
              Θ: folder({
                θSegments: RingGeometry.ΘSegments(),
                θStart: RingGeometry.ΘStart(),
                θLength: RingGeometry.ΘLength(),
              }),
              Φ: folder({
                φSegments: RingGeometry.ΦSegments(),
              }),
            }),
          }),
        }),
      },
      { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
    );

  return (
    <Ring
      args={[
        innerRadius,
        outerRadius,
        θSegments,
        φSegments,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Ring>
  );
};

export { Geometry2DRing as Ring };
