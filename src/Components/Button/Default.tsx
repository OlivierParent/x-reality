import { Text, useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Euler } from "three";

const ROTATION = {
  ACTIVE: new Euler(Math.PI / 4, Math.PI / 6),
  INACTIVE: new Euler(0, 0),
} as const;
const SAFE_OFFSET = 0.001; // Prevent Z Fighting.

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
 * @returns {React.JSX.Element}
 */
const ButtonDefault = (props: GroupProps): React.JSX.Element => {
  // States.
  const [color, setColor] = useState(COLOR.BLUE);
  const [hover, setHover] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);

  useCursor(hover);

  // Event handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setToggleButton((state) => !state);
  };
  const doubleClickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setToggleButton((state) => !state);
    setToggleColor((state) => !state);
  };
  const pointerOutHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setHover(false);
  };
  const pointerOverHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setHover(true);
  };

  useEffect(() => {
    // Color.
    const color = toggleButton
      ? toggleColor
        ? COLOR.RED
        : COLOR.GREEN
      : COLOR.BLUE;
    setColor(color);
  }, [toggleButton, toggleColor]);

  return (
    <group
      name="Button Default"
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      rotation={toggleButton ? ROTATION.ACTIVE : ROTATION.INACTIVE}
      scale={hover ? SCALE.LARGE : SCALE.SMALL}
      {...props}
    >
      <mesh //
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
      >
        <meshBasicMaterial
          color={color}
          opacity={hover ? OPACITY.LOW : OPACITY.HIGH}
          transparent={true}
        />
        <planeGeometry args={[2.5, 0.5]} />
      </mesh>
      <Text //
        fontSize={0.2}
        position={[0, 0, SAFE_OFFSET]}
      >
        Click or Double Click Me!
      </Text>
    </group>
  );
};

export { ButtonDefault as Button };
