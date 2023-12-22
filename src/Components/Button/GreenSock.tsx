import { Text, useCursor } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Euler, Group, MeshBasicMaterial, Vector3 } from "three";

enum COLOR {
  BLUE = "#0000ff",
  GREEN = "#00ff00",
  RED = "#ff0000",
}
enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
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
const SCALE = {
  LARGE: new Vector3().setScalar(1.25),
  SMALL: new Vector3().setScalar(1),
} as const;

const initialColor = COLOR.BLUE;
const gsapObject = { color: initialColor };

/**
 * Button with GSAP.
 *
 * @see https://gsap.com/
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const ButtonGreenSock = (props: GroupProps): JSX.Element => {
  // References.
  const buttonRef = useRef<Group>(null!);
  const materialRef = useRef<MeshBasicMaterial>(null!);

  // States.
  const [color, setColor] = useState(initialColor);
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
    // Parallel animation with `gsap`
    gsap.to(gsapObject, {
      color,
      onUpdate: () => {
        materialRef.current.color.set(gsapObject.color);
      },
    });
  }, [color]);

  useEffect(() => {
    // Opacity.
    const opacity = //
      isHovered //
        ? OPACITY.HIGH
        : OPACITY.LOW;
    gsap.to(materialRef.current, {
      opacity,
      duration: 0.125, // Default: 0.5
    });

    // Scale.
    const scale = //
      isHovered //
        ? SCALE.LARGE
        : SCALE.SMALL;
    gsap.to(buttonRef.current.scale, {
      ...scale,
      duration: 0.125, // Default: 0.5
    });
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
    console.log("rotation", { ...rotation, x: rotation.x }, rotation.toArray());
    gsap.to(buttonRef.current.rotation, {
      x: rotation.x,
      y: rotation.y,
      z: rotation.z,
      ease: "power2.inOut", // https://gsap.com/docs/v3/Eases/
    });
  }, [isToggledButton, isToggledColor]);

  return (
    <group
      name="Button with GreenSock"
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      ref={buttonRef}
      {...props}
    >
      <mesh //
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
      >
        <meshBasicMaterial //
          ref={materialRef}
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

export { ButtonGreenSock as Button };
