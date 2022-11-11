import { Tetrahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
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
      Geometry: folder(
        {
          Tetrahedron: folder({
            detail: TetrahedronGeometry.detail(),
            radius: TetrahedronGeometry.radius(),
          }),
        },
        Settings.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <Tetrahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Tetrahedron>
  );
};

export { Geometry3DTetrahedron as Tetrahedron };
