import { Box } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLevaGeometryBox as BoxGeometry } from "Settings/Leva/Geometry/Box";
import { Children } from "Types/Children";

/**
 * Box geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry
 */
const Geometry3DBox = ({ children }: Children): JSX.Element => {
  const { depth, depthSegments, height, heightSegments, width, widthSegments } =
    useControls(
      LEVA.SCHEMA.COMPONENTS,
      {
        Geometry: folder({
          Box: folder({
            "X Axis": folder({
              width: BoxGeometry.width(),
              widthSegments: BoxGeometry.widthSegments(),
            }),
            "Y Axis": folder({
              height: BoxGeometry.height(),
              heightSegments: BoxGeometry.heightSegments(),
            }),
            "Z Axis": folder({
              depth: BoxGeometry.depth(),
              depthSegments: BoxGeometry.depthSegments(),
            }),
          }),
        }),
      },
      { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
    );

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
