import { Cone } from "@react-three/drei";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Cone";
import { Children } from "Types/Children";

/**
 * Cone geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/ConeGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DCone = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const {
    height,
    heightSegments,
    openEnded,
    radialSegments,
    radius,
    θLength,
    θStart,
  } = useLeva();

  return (
    <Cone
      args={[
        radius,
        height,
        radialSegments,
        heightSegments,
        openEnded,
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Cone>
  );
};

export { Geometry3DCone as Cone };
