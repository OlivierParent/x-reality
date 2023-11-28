import { Cone } from "@react-three/drei";
import { folder, useControls } from "leva";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryCone as ConeGeometry } from "Settings/Leva/Geometry/Cone";
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
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Cone: folder({
            "XZ Plane": folder({
              radius: ConeGeometry.radius(),
              radialSegments: ConeGeometry.radialSegments(),
              openEnded: ConeGeometry.openEnded(),
              Θ: folder({
                θStart: ConeGeometry.ΘStart(),
                θLength: ConeGeometry.ΘLength(),
              }),
            }),
            "Y Axis": folder({
              height: ConeGeometry.height(),
              heightSegments: ConeGeometry.heightSegments(),
            }),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

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
