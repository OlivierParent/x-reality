import { Tetrahedron } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Tetrahedron";
import { Children } from "Types/Children";

/**
 * Tetrahedron geometry (4 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DTetrahedron = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const {
    detail, //
    radius,
  } = useLeva();

  return (
    <Tetrahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Tetrahedron>
  );
};

export { Geometry3DTetrahedron as Tetrahedron };
