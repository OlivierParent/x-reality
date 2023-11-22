import { Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { MathUtils } from "three";

const ClockDigital = (props: GroupProps) => {
  // States.
  const [text, setText] = useState<string>("");

  // References.
  const clockRef = useRef<any>(null!);

  useEffect(() => {
    clockRef.current.rotation.x = -MathUtils.degToRad(30);
  }, []);

  useEffect(() => {
    clockRef.current.text = text;
  }, [text]);

  useFrame(() => {
    const d = new Date().toLocaleTimeString();
    setText(d);
  });

  return (
    <group name="Digital Clock" {...props}>
      <Text fontSize={2} ref={clockRef}>
        {"00:00:00"}
      </Text>
    </group>
  );
};

export { ClockDigital as Clock };
