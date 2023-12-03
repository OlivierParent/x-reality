import { Icosahedron } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Icosahedron";
import { Children } from "Types/Children";

/**
 * Icosahedron geometry (20 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DIcosahedron = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const { detail, radius } = useLeva();

  return (
    <Icosahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Icosahedron>
  );
};

export { Geometry3DIcosahedron as Icosahedron };
