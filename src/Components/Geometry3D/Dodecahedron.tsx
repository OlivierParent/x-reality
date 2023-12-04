import { Dodecahedron } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Dodecahedron";
import { Children } from "Types/Children";

/**
 * Dodecahedron geometry (12 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DDodecahedron = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const {
    detail, //
    radius,
  } = useLeva();

  return (
    <Dodecahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Dodecahedron>
  );
};

export { Geometry3DDodecahedron as Dodecahedron };
