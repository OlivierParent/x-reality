import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLevaHelpers } from "Settings/Leva/Helpers";

/**
 * Three.js Helpers.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Helpers = (props: GroupProps): JSX.Element => {
  const { axesHelper, gizmoHelper, gridHelper, polarGridHelper, stats } =
    useControls(
      LEVA.SCHEMA.HELPERS,
      {
        axesHelper: SettingsLevaHelpers.axesHelper(),
        gizmoHelper: SettingsLevaHelpers.gizmoHelper(true),
        gridHelper: SettingsLevaHelpers.gridHelper(),
        polarGridHelper: SettingsLevaHelpers.polarGridHelper(),
        stats: SettingsLevaHelpers.stats(),
      },
      { collapsed: true, color: undefined, order: LEVA.ORDER.HELPERS }
    );

  return (
    <group name="Helpers" {...props}>
      {axesHelper && <axesHelper />}
      {gizmoHelper && (
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={[
              "hsl(0, 100%, 50%)",
              "hsl(120, 100%, 50%)",
              "hsl(240, 100%, 50%)",
            ]}
            labelColor="black"
          />
        </GizmoHelper>
      )}
      {gridHelper && <gridHelper />}
      {stats && <Stats />}
      {polarGridHelper && <polarGridHelper />}

      <OrbitControls enableDamping={true} enablePan={true} enableZoom={true} />
    </group>
  );
};

export { Helpers };
