import { GizmoHelper, GizmoViewport, Stats } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { folder, useControls } from "leva";

import { LEVA } from "Configs/leva";
import { SettingsLeva as Settings } from "Settings/Leva";
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
      LEVA.SCHEMA.GENERAL,
      {
        Helpers: folder(
          {
            axesHelper: SettingsLevaHelpers.axesHelper(),
            gizmoHelper: SettingsLevaHelpers.gizmoHelper(true),
            gridHelper: SettingsLevaHelpers.gridHelper(),
            polarGridHelper: SettingsLevaHelpers.polarGridHelper(),
            stats: SettingsLevaHelpers.stats(),
          },
          Settings.folder(LEVA.ORDER.HELPERS)
        ),
      },
      Settings.folder(LEVA.ORDER.GENERAL)
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
    </group>
  );
};

export { Helpers };
