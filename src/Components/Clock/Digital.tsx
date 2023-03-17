import { Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { MathUtils } from "three";

const ClockDigital = (props: GroupProps) => {
  const clockRef = useRef<any>(null!);

  useEffect(() => {
    clockRef.current.rotation.x = -MathUtils.degToRad(30);
  }, []);

  useFrame(() => {
    clockRef.current.text = new Date().toLocaleTimeString();
  });

  return (
    <group name="Digital Clock" {...props}>
      <Text fontSize={2} ref={clockRef}>
        {}
      </Text>
    </group>
  );
};

export { ClockDigital };
