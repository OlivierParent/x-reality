import { Octahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaGeometryOctahedron as OctahedronGeometry } from "Settings/Leva/Geometry/Octahedron";
import { Children } from "Types/Children";

/**
 * Octahedron geometry (8 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/OctahedronGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DOctahedron = ({ children }: Children): React.JSX.Element => {
  const { detail, radius } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Octahedron: folder({
            detail: OctahedronGeometry.detail(),
            radius: OctahedronGeometry.radius(),
          }),
        },
        Settings.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <Octahedron args={[radius, detail]}>{children ?? <Material />}</Octahedron>
  );
};

export { Geometry3DOctahedron as Octahedron };
