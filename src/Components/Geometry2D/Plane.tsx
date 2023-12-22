import { Plane } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry2D/Plane";
import { Children } from "Types/Children";

/**
 * Plane geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry
 *
 * @returns {JSX.Element}
 */
const Geometry2DPlane = ({ children }: Children): JSX.Element => {
  // Leva Controls.
  const {
    height, //
    heightSegments,
    width,
    widthSegments,
  } = useLeva();

  return (
    <Plane args={[width, height, widthSegments, heightSegments]}>
      {children ?? <Material />}
    </Plane>
  );
};

export { Geometry2DPlane as Plane };
