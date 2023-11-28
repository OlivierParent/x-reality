import { Torus } from "@react-three/drei";
import { folder, useControls } from "leva";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometryTorus as TorusGeometry } from "Settings/Leva/Geometry/Torus";
import { Children } from "Types/Children";

/**
 * Torus geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DTorus = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const { arc, radialSegments, radius, tube, tubularSegments } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Torus: folder({
            arc: TorusGeometry.arc(),
            radialSegments: TorusGeometry.radialSegments(),
            radius: TorusGeometry.radius(),
            tube: TorusGeometry.tube(),
            tubularSegments: TorusGeometry.tubularSegments(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <Torus
      args={[
        radius,
        tube,
        radialSegments,
        tubularSegments,
        MathUtils.degToRad(arc),
      ]}
    >
      {children ?? <Material />}
    </Torus>
  );
};

export { Geometry3DTorus as Torus };
