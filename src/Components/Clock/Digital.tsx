import { Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { MathUtils } from "three";

const ClockDigital = (props: GroupProps) => {
  // States.
  const [text, setText] = useState<string>("00:00:00");

  // References.
  const clockRef = useRef<any>(null!);

  const setTime = useCallback(() => {
    const dateText = new Date().toLocaleTimeString();
    setText(dateText);
  }, [setText]);

  useEffect(() => {
    clockRef.current.rotation.x = -MathUtils.degToRad(30);
  }, []);

  useEffect(() => {
    clockRef.current.text = text;
  }, [text]);

  useFrame(() => {
    // Set time on each frame.
    setTime();
  });

  useLayoutEffect(() => {
    // Set time before first render.
    setTime();
  }, [setTime]);

  return (
    <group name="Digital Clock" {...props}>
      <Text fontSize={2} ref={clockRef}>
        {""}
      </Text>
    </group>
  );
};

export { ClockDigital as Clock };
