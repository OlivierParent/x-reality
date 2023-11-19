import { Icosahedron } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaGeometryIcosahedron as IcosahedronGeometry } from "Settings/Leva/Geometry/Icosahedron";
import { Children } from "Types/Children";

/**
 * Icosahedron geometry (20 faces).
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/IcosahedronGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DIcosahedron = ({ children }: Children): React.JSX.Element => {
  const { detail, radius } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Icosahedron: folder({
            detail: IcosahedronGeometry.detail(),
            radius: IcosahedronGeometry.radius(),
          }),
        },
        Settings.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <Icosahedron args={[radius, detail]}>
      {children ?? <Material />}
    </Icosahedron>
  );
};

export { Geometry3DIcosahedron as Icosahedron };
