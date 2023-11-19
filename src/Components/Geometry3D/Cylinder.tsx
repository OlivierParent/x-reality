import { Cylinder } from "@react-three/drei";
import { folder, useControls } from "leva";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaGeometryCylinder as CylinderGeometry } from "Settings/Leva/Geometry/Cylinder";
import { Children } from "Types/Children";

/**
 * Cylinder geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DCylinder = ({ children }: Children): React.JSX.Element => {
  // Leva.
  const {
    height,
    heightSegments,
    openEnded,
    radialSegments,
    radiusBottom,
    radiusTop,
    θLength,
    θStart,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Cylinder: folder({
            "XZ Plane": folder({
              radiusBottom: CylinderGeometry.radiusBottom(),
              radiusTop: CylinderGeometry.radiusTop(),
              radialSegments: CylinderGeometry.radialSegments(),
              openEnded: CylinderGeometry.openEnded(),
              Θ: folder({
                θStart: CylinderGeometry.ΘStart(),
                θLength: CylinderGeometry.ΘLength(),
              }),
            }),
            "Y Axis": folder({
              height: CylinderGeometry.height(),
              heightSegments: CylinderGeometry.heightSegments(),
            }),
          }),
        },
        Settings.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

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
