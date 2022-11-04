import { Tetrahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLevaGeometryTetrahedron as TetrahedronGeometry } from "Settings/Leva/Geometry/Tetrahedron";
import { Children } from "Types/Children";

/**
 * Tetrahedron geometry (4 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/TetrahedronGeometry
 */
const Geometry3DTetrahedron = ({ children }: Children): JSX.Element => {
  const { detail, radius } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder({
        Tetrahedron: folder({
          detail: TetrahedronGeometry.detail(),
          radius: TetrahedronGeometry.radius(),
        }),
      }),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
  );

  return (
    <Tetrahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Tetrahedron>
  );
};

export { Geometry3DTetrahedron as Tetrahedron };
