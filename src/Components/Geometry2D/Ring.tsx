import { Ring } from "@react-three/drei";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry2D/Ring";
import { Children } from "Types/Children";

/**
 * Ring geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/RingGeometry
 *
 * @returns {JSX.Element}
 */
const Geometry2DRing = ({ children }: Children): JSX.Element => {
  // Leva Controls.
  const {
    innerRadius, //
    outerRadius,
    θLength,
    θSegments,
    θStart,
    φSegments,
  } = useLeva();

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
