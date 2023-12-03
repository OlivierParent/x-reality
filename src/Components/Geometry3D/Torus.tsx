import { Torus } from "@react-three/drei";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Torus";
import { Children } from "Types/Children";

/**
 * Torus geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DTorus = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const { arc, radialSegments, radius, tube, tubularSegments } = useLeva();

  return (
    <Torus
      args={[
        radius,
        tube,
        radialSegments,
        tubularSegments,
        MathUtils.degToRad(arc),
      ]}
    >
      {children ?? <Material />}
    </Torus>
  );
};

export { Geometry3DTorus as Torus };
