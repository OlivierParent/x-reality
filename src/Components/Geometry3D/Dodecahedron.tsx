import { Dodecahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLevaGeometryDodecahedron as DodecahedronGeometry } from "Settings/Leva/Geometry/Dodecahedron";
import { Children } from "Types/Children";

/**
 * Dodecahedron geometry (12 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/DodecahedronGeometry
 */
const Geometry3DDodecahedron = ({ children }: Children): JSX.Element => {
  const { detail, radius } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder({
        Dodecahedron: folder({
          detail: DodecahedronGeometry.detail(),
          radius: DodecahedronGeometry.radius(),
        }),
      }),
    },
    { collapsed: false, color: undefined, order: LEVA.ORDER.COMPONENTS }
  );

  return (
    <Dodecahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Dodecahedron>
  );
};

export { Geometry3DDodecahedron as Dodecahedron };
