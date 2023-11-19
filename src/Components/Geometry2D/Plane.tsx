import { Plane } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaGeometryPlane as PlaneGeometry } from "Settings/Leva/Geometry/Plane";
import { Children } from "Types/Children";

/**
 * Plane geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/PlaneGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry2DPlane = ({ children }: Children): React.JSX.Element => {
  const { height, heightSegments, width, widthSegments } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Plane: folder({
            "X Axis": folder({
              width: PlaneGeometry.width(),
              widthSegments: PlaneGeometry.widthSegments(),
            }),
            "Y Axis": folder({
              height: PlaneGeometry.height(),
              heightSegments: PlaneGeometry.heightSegments(),
            }),
          }),
        },
        Settings.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <Plane args={[width, height, widthSegments, heightSegments]}>
      {children ?? <Material />}
    </Plane>
  );
};

export { Geometry2DPlane as Plane };
