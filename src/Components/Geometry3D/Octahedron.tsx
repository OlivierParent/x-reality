import { Octahedron } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Octahedron";
import { Children } from "Types/Children";

/**
 * Octahedron geometry (8 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DOctahedron = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const { detail, radius } = useLeva();

  return (
    <Octahedron args={[radius, detail]}>{children ?? <Material />}</Octahedron>
  );
};

export { Geometry3DOctahedron as Octahedron };
