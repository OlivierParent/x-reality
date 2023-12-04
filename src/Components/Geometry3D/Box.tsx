import { Box } from "@react-three/drei";

import { Material } from "Components/Material";
import { useLeva } from "Hooks/Leva/Geometry3D/Box";
import { Children } from "Types/Children";

/**
 * Box geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DBox = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const {
    depth, //
    depthSegments,
    height,
    heightSegments,
    width,
    widthSegments,
  } = useLeva();

  return (
    <Box
      args={[
        width,
        height,
        depth,
        widthSegments,
        heightSegments,
        depthSegments,
      ]}
    >
      {children ?? <Material />}
    </Box>
  );
};

export { Geometry3DBox as Box };
