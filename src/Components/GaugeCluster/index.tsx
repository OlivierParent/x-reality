import { Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";

import { Gauge } from "Components/GaugeCluster/Gauge";
import { GAUGE as GAUGE_LEFT } from "Components/GaugeCluster/GaugeLeft.config";
import { GAUGE as GAUGE_RIGHT } from "Components/GaugeCluster/GaugeRight.config";
import { useState } from "react";

type Gear = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type AccelerationDirection = 1 | -1;

const X_OFFSET = 1.1;
const GEAR_RATIO = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9];
const POWER_LOSS_RATIO = 0.85;
const ACCELERATION_RATIO = 0.3;
const RPM_INITIAL = Math.round((35 / GAUGE_LEFT.VALUE.MAXIMUM) * 100);
const RPM_SHIFTED_DOWN = Math.round((35 / GAUGE_LEFT.VALUE.MAXIMUM) * 100);
const RPM_SHIFTED_UP = Math.round((45 / GAUGE_LEFT.VALUE.MAXIMUM) * 100);
const RPM_SHIFT_DOWN = Math.round((25 / GAUGE_LEFT.VALUE.MAXIMUM) * 100);
const RPM_SHIFT_UP = Math.round((55 / GAUGE_LEFT.VALUE.MAXIMUM) * 100);
const SPEED_BOTTOM = Math.round((18 / GAUGE_RIGHT.VALUE.MAXIMUM) * 100);
const SPEED_TOP = Math.round(
  (GAUGE_RIGHT.VALUE.DANGER / GAUGE_RIGHT.VALUE.MAXIMUM) * 100
);

/**
 * Gauge Cluster.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const GaugeCluster = (props: GroupProps): React.JSX.Element => {
  const [accelerationDirection, setAccelerationDirection] =
    useState<AccelerationDirection>(1);
  const [gear, setGear] = useState<Gear>(1);
  const [rpm, setRpm] = useState(RPM_INITIAL);
  const [speed, setSpeed] = useState(0);

  useFrame(() => {
    setRpm((rpm) => {
      if (rpm < RPM_SHIFT_DOWN) {
        rpm = RPM_SHIFTED_DOWN;
        setGear((gear) => (--gear < 1 ? 1 : gear) as Gear);
      } else if (RPM_SHIFT_UP < rpm) {
        rpm = RPM_SHIFTED_UP;
        setGear((gear) => (6 < ++gear ? 6 : gear) as Gear);
      } else {
        rpm =
          rpm +
          accelerationDirection *
            ACCELERATION_RATIO *
            (accelerationDirection === 1 ? 1 : 2) *
            POWER_LOSS_RATIO ** gear;
      }

      return rpm;
    });
    setSpeed(() => {
      const speed = GEAR_RATIO[gear] * rpm;
      if (SPEED_TOP < speed) {
        setAccelerationDirection(-1);
      } else if (speed < SPEED_BOTTOM) {
        setAccelerationDirection(1);
      }

      return speed;
    });
  });

  return (
    <group name="Gauge" {...props}>
      <Gauge
        config={GAUGE_LEFT}
        percentage={rpm}
        position={[-X_OFFSET, 0, 0]}
        size={1}
      />
      <Text fontSize={0.25} position={[0, 0.5, 0]}>
        {gear}
      </Text>
      <Gauge
        config={GAUGE_RIGHT}
        percentage={speed}
        position={[X_OFFSET, 0, 0]}
        size={1}
      />
    </group>
  );
};

export { GaugeCluster };
