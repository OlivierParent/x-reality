import { TorusKnot } from "@react-three/drei";
import { folder, useControls } from "leva";

import { Material } from "Components/Material";
import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
import { SettingsLevaGeometryTorusKnot as TorusKnotGeometry } from "Settings/Leva/Geometry/TorusKnot";
import { Children } from "Types/Children";

const Geometry3DTorusKnot = ({ children }: Children): JSX.Element => {
  const { p, q, radialSegments, radius, tube, tubularSegments } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder({
        "Torus Knot": folder({
          p: TorusKnotGeometry.p(),
          q: TorusKnotGeometry.q(),
          radialSegments: TorusKnotGeometry.radialSegments(),
          radius: TorusKnotGeometry.radius(),
          tube: TorusKnotGeometry.tube(),
          tubularSegments: TorusKnotGeometry.tubularSegments(),
        }),
      }),
    },
    Settings.folder(LEVA.ORDER.COMPONENTS)
  );
  return (
    <TorusKnot args={[radius, tube, tubularSegments, radialSegments, p, q]}>
      {children ?? <Material />}
    </TorusKnot>
  );
};

export { Geometry3DTorusKnot as TorusKnot };
