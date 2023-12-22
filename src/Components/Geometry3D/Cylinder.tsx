import { Cylinder } from "@react-three/drei";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Cylinder";
import { Children } from "Types/Children";

/**
 * Cylinder geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry
 *
 * @returns {JSX.Element}
 */
const Geometry3DCylinder = ({ children }: Children): JSX.Element => {
  // Leva Controls.
  const {
    height,
    heightSegments,
    openEnded,
    radialSegments,
    radiusBottom,
    radiusTop,
    θLength,
    θStart,
  } = useLeva();

  return (
    <Cylinder
      args={[
        radiusTop,
        radiusBottom,
        height,
        radialSegments,
        heightSegments,
        openEnded,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Cylinder>
  );
};

export { Geometry3DCylinder as Cylinder };
