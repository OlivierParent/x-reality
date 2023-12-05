import { TorusKnot } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/TorusKnot";
import { Children } from "Types/Children";

/**
 * Torus knot geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DTorusKnot = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const {
    p, //
    q,
    radialSegments,
    radius,
    tube,
    tubularSegments,
  } = useLeva();

  return (
    <TorusKnot args={[radius, tube, tubularSegments, radialSegments, p, q]}>
      {children ?? <Material />}
    </TorusKnot>
  );
};

export { Geometry3DTorusKnot as TorusKnot };
