import { Text } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Group, MeshBasicMaterial, Vector3 } from "three";

const ROTATION = {
  ACTIVE: { x: Math.PI / 4, y: Math.PI / 6 },
  INACTIVE: { x: 0, y: 0 },
} as const;
const SAFE_OFFSET = 0.001; // Prevent Z Fighting.
const SCALE = {
  LARGE: new Vector3().setScalar(1.25),
  SMALL: new Vector3().setScalar(1),
} as const;

enum COLOR {
  BLUE = "#0000ff",
  GREEN = "#00ff00",
  RED = "#ff0000",
}
enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}

const initialColor = COLOR.BLUE;
const gsapObject = { color: initialColor };

/**
 * Button with GSAP.
 *
 * @see https://gsap.com/
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ButtonGreenSock = (props: GroupProps): React.JSX.Element => {
  // References.
  const buttonRef = useRef<Group>(null!);
  const materialRef = useRef<MeshBasicMaterial>(null!);

  // States.
  const [color, setColor] = useState(initialColor);
  const [hover, setHover] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);

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
    // Parallel animation with `gsap`
    gsap.to(gsapObject, {
      color,
      onUpdate: () => {
        materialRef.current.color.set(gsapObject.color);
      },
    });
  }, [color]);

  useEffect(() => {
    // Cursor.
    const cursor = hover ? "pointer" : "default";
    window.document.body.style.setProperty("cursor", cursor);

    // Opacity.
    const opacity = hover ? OPACITY.HIGH : OPACITY.LOW;
    gsap.to(materialRef.current, {
      opacity,
      duration: 0.125, // Default: 0.5
    });

    // Scale.
    const scale = hover ? SCALE.LARGE : SCALE.SMALL;
    gsap.to(buttonRef.current.scale, {
      ...scale,
      duration: 0.125, // Default: 0.5
    });
  }, [hover]);

  useEffect(() => {
    // Color.
    const color = toggleButton
      ? toggleColor
        ? COLOR.RED
        : COLOR.GREEN
      : COLOR.BLUE;
    setColor(color);

    // Rotation.
    const rotation = toggleButton ? ROTATION.ACTIVE : ROTATION.INACTIVE;
    gsap.to(buttonRef.current.rotation, {
      ...rotation,
      ease: "power2.inOut", // https://gsap.com/docs/v3/Eases/
    });
  }, [toggleButton, toggleColor]);

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
