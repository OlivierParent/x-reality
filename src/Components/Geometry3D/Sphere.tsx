import { Sphere } from "@react-three/drei";
import { folder, useControls } from "leva";
import { MathUtils } from "three";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";
import { SettingsLevaGeometrySphere as SphereGeometry } from "Settings/Leva/Geometry/Sphere";
import { Children } from "Types/Children";

/**
 * Sphere geometry.
 *
 * @see https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry
 *
 * @returns {React.JSX.Element}
 */
const Geometry3DSphere = ({ children }: Children): React.JSX.Element => {
  // Leva Controls.
  const {
    heightSegments,
    radius,
    widthSegments,
    θLength,
    θStart,
    φLength,
    φStart,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Sphere: folder({
            "Transverse Plane": folder({
              radius: SphereGeometry.radius(),
              widthSegments: SphereGeometry.widthSegments(),
              Φ: folder({
                φStart: SphereGeometry.ΦStart(),
                φLength: SphereGeometry.ΦLength(),
              }),
            }),
            "Frontal Plane": folder({
              heightSegments: SphereGeometry.heightSegments(),
              Θ: folder({
                θStart: SphereGeometry.ΘStart(),
                θLength: SphereGeometry.ΘLength(),
              }),
            }),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <Sphere
      args={[
        radius,
        widthSegments,
        heightSegments,
        MathUtils.degToRad(φStart),
        MathUtils.degToRad(φLength),
        MathUtils.degToRad(θStart),
        MathUtils.degToRad(θLength),
      ]}
    >
      {children ?? <Material />}
    </Sphere>
  );
};

export { Geometry3DSphere as Sphere };
