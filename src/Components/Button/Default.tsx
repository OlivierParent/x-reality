import { Text } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useState } from "react";

const SAFE_OFFSET = 0.001;

enum COLOR {
  BLUE = 0x0000ff,
  GREEN = 0x006600,
  RED = 0xff0000,
}
enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}
enum SCALE {
  LARGE = 1.25,
  SMALL = 1,
}

/**
 * Button.
 *
 * @param {GroupProps} props
 * @returns { JSX.Element }
 */
const ButtonDefault = (props: GroupProps): JSX.Element => {
  const [color, setColor] = useState(COLOR.RED);
  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState(false);

  // Event handlers.
  const clickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    setToggle((state) => !state);
    setColor(toggle ? COLOR.RED : COLOR.GREEN);
  };
  const doubleClickHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    setColor(COLOR.BLUE);
  };
  const pointerOutHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    setHover(false);
  };
  const pointerOverHandler = (ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    setHover(true);
  };

  return (
    <group
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      scale={hover ? SCALE.LARGE : SCALE.SMALL}
    >
      <mesh onPointerOut={pointerOutHandler} onPointerOver={pointerOverHandler}>
        <meshBasicMaterial
          color={color}
          opacity={hover ? OPACITY.LOW : OPACITY.HIGH}
          transparent={true}
        />
        <planeGeometry args={[2.5, 0.5]} />
      </mesh>
      <Text fontSize={0.2} position={[0, 0, SAFE_OFFSET]}>
        Click or Double Click Me!
      </Text>
    </group>
  );
};

export { ButtonDefault as Default };
