import { Text, useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";
import { Euler } from "three";

enum COLOR {
  BLUE = "#0000ff",
  GREEN = "#00ff00",
  RED = "#ff0000",
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
 * Button with Framer Motion 3D.
 *
 * @see https://www.framer.com/motion/
 * @see https://www.framer.com/motion/three-introduction/
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ButtonFrameMotion3d = (props: GroupProps): React.JSX.Element => {
  // States.
  const [color, setColor] = useState(COLOR.BLUE);
  const [isHovered, setIsHovered] = useState(false);
  const [isToggledButton, setIsToggledButton] = useState(false);
  const [isToggledColor, setIsToggledColor] = useState(false);
  const [opacity, setOpacity] = useState(OPACITY.HIGH);
  const [rotation, setRotation] = useState(ROTATION.INACTIVE);
  const [scale, setScale] = useState(SCALE.SMALL);

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
    // Opacity.
    const opacity = //
      isHovered //
        ? OPACITY.HIGH
        : OPACITY.LOW;
    setOpacity(opacity);

    // Scale.
    const scale = //
      isHovered //
        ? SCALE.LARGE
        : SCALE.SMALL;
    setScale(scale);
  }, [isHovered]);

  useEffect(() => {
    // Color.
    const color = isToggledButton
      ? isToggledColor
        ? COLOR.RED
        : COLOR.GREEN
      : COLOR.BLUE;
    setColor(color);

    // Rotation.
    const rotation = //
      isToggledButton //
        ? ROTATION.ACTIVE
        : ROTATION.INACTIVE;
    setRotation(rotation);
  }, [isToggledButton, isToggledColor]);

  return (
    <group
      name="Button with GreenSock"
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      {...props}
    >
      <motion.group
        animate={{
          scale,
          rotateX: rotation.x,
          rotateY: rotation.y,
          rotateZ: rotation.z,
        }}
        transition={{
          duration: 0.5,
          scale: {
            duration: 0.125, //
          },
          ease: "easeInOut", // https://www.framer.com/motion/transition/#tween
        }}
      >
        <motion.mesh //
          onPointerOut={pointerOutHandler}
          onPointerOver={pointerOverHandler}
        >
          <motion.meshBasicMaterial //
            animate={{
              color, //
              opacity,
            }}
            transparent={true}
            transition={{
              duration: 0.5,
              opacity: {
                duration: 0.125, //
              },
            }}
          />
          <planeGeometry args={[2.5, 0.5]} />
        </motion.mesh>
        <Text //
          fontSize={0.2}
          position={[0, 0, SAFE_OFFSET]}
        >
          Click or Double Click Me!
        </Text>
      </motion.group>
    </group>
  );
};

export { ButtonFrameMotion3d as Button };
