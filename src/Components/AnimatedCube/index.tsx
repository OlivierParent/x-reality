import { animated, useSpring } from "@react-spring/three";
import { useState } from "react";

const AnimatedCube = (props: any) => {
  const colors = ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const [toggle, setToggle] = useState(true);
  const { opacity, position } = useSpring({
    opacity: toggle ? 1 : 0.5,
    position: toggle ? [0, 0, 0] : getPosition(),
  });
  // https://codesandbox.io/s/gykbc?file=/src/App.js

  function getPosition() {
    const position = [4, 4, 0].map((value) => (Math.random() * 2 - 1) * value);
    console.log(position);
    return position;
  }

  return (
    <animated.mesh
      {...props}
      onClick={() => setToggle(!toggle)}
      position={position}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshStandardMaterial
        color={color}
        opacity={opacity as number}
        transparent={true}
      /> */}
    </animated.mesh>
  );
};

export { AnimatedCube };
