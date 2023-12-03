import { Sphere } from "@react-three/drei";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Sphere";
import { Children } from "Types/Children";

/**
 * Sphere geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DSphere = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const {
    heightSegments,
    radius,
    widthSegments,
    θLength,
    θStart,
    φLength,
    φStart,
  } = useLeva();

  return (
    <Sphere
      args={[
        radius,
        widthSegments,
        heightSegments,
        MathUtils.degToRad(φStart),
        MathUtils.degToRad(φLength),
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Sphere>
  );
};

export { Geometry3DSphere as Sphere };
