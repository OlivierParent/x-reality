import { Text, useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Euler } from "three";

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

const ROTATION = {
  ACTIVE: new Euler(
    Math.PI / 4, //
    Math.PI / 6,
    0
  ),
  INACTIVE: new Euler(),
} as const;
const SAFE_OFFSET = 0.001; // Prevent Z Fighting.

/**
 * Button.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ButtonDefault = (props: GroupProps): React.JSX.Element => {
  // States.
  const [color, setColor] = useState(COLOR.BLUE);
  const [isHovered, setIsHovered] = useState(false);
  const [isToggledButton, setIsToggledButton] = useState(false);
  const [isToggledColor, setIsToggledColor] = useState(false);

  // Cursor on hover.
  useCursor(isHovered);

  // Event handlers.
  const clickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsToggledButton((state) => !state);
  };
  const doubleClickHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsToggledButton((state) => !state);
    setIsToggledColor((state) => !state);
  };
  const pointerOutHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
  };
  const pointerOverHandler = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(true);
  };

  useEffect(() => {
    // Color.
    const color = isToggledButton
      ? isToggledColor
        ? COLOR.RED
        : COLOR.GREEN
      : COLOR.BLUE;
    setColor(color);
  }, [isToggledButton, isToggledColor]);

  return (
    <group
      name="Button Default"
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      rotation={isToggledButton ? ROTATION.ACTIVE : ROTATION.INACTIVE}
      scale={isHovered ? SCALE.LARGE : SCALE.SMALL}
      {...props}
    >
      <mesh //
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
      >
        <meshBasicMaterial
          color={color}
          opacity={isHovered ? OPACITY.HIGH : OPACITY.LOW}
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
