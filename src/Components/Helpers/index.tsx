import { GizmoHelper, GizmoViewport, Stats } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

import { useLeva } from "Hooks/Leva/Helpers";

/**
 * Three.js Helpers.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Helpers = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const {
    axesHelper, //
    gizmoHelper,
    gridHelper,
    polarGridHelper,
    stats,
  } = useLeva();

  return (
    <group name="Helpers" {...props}>
      {axesHelper && <axesHelper />}
      {gizmoHelper && (
        <GizmoHelper //
          alignment="bottom-right"
          margin={[80, 80]}
        >
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
