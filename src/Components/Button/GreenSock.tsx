import { Text } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { Group, MeshBasicMaterial, Vector3 } from "three";

const ROTATION = Object.freeze({
  ACTIVE: { x: Math.PI / 4, y: Math.PI / 6 },
  INACTIVE: { x: 0, y: 0 },
});
const SAFE_OFFSET = 0.001; // Prevent Z Fighting.
const SCALE = Object.freeze({
  LARGE: new Vector3().setScalar(1.25),
  SMALL: new Vector3().setScalar(1),
});

enum COLOR {
  BLUE = "#00f",
  GREEN = "#060",
  RED = "#f00",
}
enum OPACITY {
  HIGH = 1,
  LOW = 0.75,
}

const initialColor = COLOR.RED;
const gsapObject = { color: initialColor };

/**
 * Button with GSAP.
 *
 * @see https://gsap.com/
 *
 * @param {GroupProps} props
 * @returns { JSX.Element }
 */
const ButtonGreenSock = (props: GroupProps): JSX.Element => {
  // References.
  const buttonRef = useRef<Group>(null!);
  const materialRef = useRef<MeshBasicMaterial>(null!);

  // States.
  const [color, setColor] = useState(COLOR.RED);
  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState(false);

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
    const scale = hover ? SCALE.LARGE : SCALE.SMALL;
    gsap.to(materialRef.current, {
      opacity: hover ? OPACITY.LOW : OPACITY.HIGH,
      duration: 0.125, // Default: 0.5
    });
    gsap.to(buttonRef.current.scale, {
      ...scale,
      duration: 0.125, // Default: 0.5
    });
  }, [hover]);

  useEffect(() => {
    const rotation = toggle ? ROTATION.ACTIVE : ROTATION.INACTIVE;
    gsap.to(buttonRef.current.rotation, {
      ...rotation,
      ease: "power2.inOut", // https://gsap.com/docs/v3/Eases/
    });
  }, [toggle]);

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
      name="Button with GreenSock"
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      onPointerOut={pointerOutHandler}
      onPointerOver={pointerOverHandler}
      ref={buttonRef}
      {...props}
    >
      <mesh onPointerOut={pointerOutHandler} onPointerOver={pointerOverHandler}>
        <meshBasicMaterial ref={materialRef} transparent={true} />
        <planeGeometry args={[2.5, 0.5]} />
      </mesh>
      <Text fontSize={0.2} position={[0, 0, SAFE_OFFSET]}>
        Click or Double Click Me!
      </Text>
    </group>
  );
};

export { ButtonGreenSock as Button };
