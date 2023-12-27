import { Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";

import { Gauge } from "Components/GaugeCluster/Gauge";
import { GAUGE_CLUSTER } from "Components/GaugeCluster/GaugeCluster.config";
import { GAUGE as GAUGE_LEFT } from "Components/GaugeCluster/GaugeLeft.config";
import { GAUGE as GAUGE_RIGHT } from "Components/GaugeCluster/GaugeRight.config";
import { useState } from "react";

type Gear = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type AccelerationDirection = 1 | -1;

const ACCELERATION = {
  ACCELERATE: 1,
  DECELERATE: -1,
  SPEED: {
    ACCELERATION: 2,
    DECELERATION: 1,
  },
} as const;

const X_OFFSET = 1.1;

/**
 * Gauge Cluster.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const GaugeCluster = (props: GroupProps): JSX.Element => {
  const [accelerationDirection, setAccelerationDirection] =
    useState<AccelerationDirection>(ACCELERATION.ACCELERATE);
  const [gear, setGear] = useState<Gear>(1);
  const [rpm, setRpm] = useState(GAUGE_CLUSTER.RPM.INITIAL);
  const [speed, setSpeed] = useState(0);

  useFrame(() => {
    setRpm((rpm: number) => {
      if (rpm < GAUGE_CLUSTER.RPM.SHIFT.DOWN) {
        rpm = GAUGE_CLUSTER.RPM.SHIFTED.DOWN;
        setGear((gear) => (--gear < 1 ? 1 : gear) as Gear);
      } else if (GAUGE_CLUSTER.RPM.SHIFT.UP < rpm) {
        rpm = GAUGE_CLUSTER.RPM.SHIFTED.UP;
        setGear((gear) => (6 < ++gear ? 6 : gear) as Gear);
      } else {
        rpm =
          rpm +
          accelerationDirection *
            GAUGE_CLUSTER.ACCELERATION_RATIO *
            (accelerationDirection === ACCELERATION.DECELERATE
              ? ACCELERATION.SPEED.DECELERATION
              : ACCELERATION.SPEED.ACCELERATION) *
            GAUGE_CLUSTER.POWER_LOSS_RATIO ** gear;
      }

      return rpm;
    });
    setSpeed(() => {
      const speed = GAUGE_CLUSTER.GEAR_RATIO[gear] * rpm;
      if (GAUGE_CLUSTER.SPEED.TOP < speed) {
        setAccelerationDirection(ACCELERATION.DECELERATE);
      } else if (speed < GAUGE_CLUSTER.SPEED.IDLE) {
        setAccelerationDirection(ACCELERATION.ACCELERATE);
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
