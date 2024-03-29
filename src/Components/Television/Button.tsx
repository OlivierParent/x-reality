import { Circle, Html, useCursor, Svg } from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useCallback, useState } from "react";
import { Vector3 } from "three";

import { TELEVISION } from "Components/Television/Television.config";
import {
  cursorActiveHandler,
  cursorInactiveHandler,
} from "Components/UserInterface/CursorOverlay";

type TelevisionButtonProps = {
  clickHandler: any;
  color: string;
  colorHover?: string;
  colorIcon?: string;
  icon?: string;
  tooltip?: string;
} & GroupProps;

const SAFE_OFFSET = 0.02; // Safe offset to avoid z-fighting.

const radius = (TELEVISION.SIZE * TELEVISION.BUTTON.SIZE) / 2;
const segments = 32;

const TelevisionButton = ({
  clickHandler,
  color,
  colorHover = "#ff00ff",
  colorIcon = "#ffffff",
  icon,
  position = new Vector3(),
  tooltip,
}: TelevisionButtonProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const pointerOverHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    cursorActiveHandler(event);
    setIsHovered(true);
  }, []);
  const pointerOutHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    cursorInactiveHandler(event);
    setIsHovered(false);
  }, []);

  // Cursor on hover.
  useCursor(isHovered);

  return (
    <group
      name="Television Button" //
      position={position}
    >
      <Circle
        args={[radius, segments]}
        name="Loop Button"
        onClick={clickHandler}
        onPointerEnter={pointerOverHandler}
        onPointerLeave={pointerOutHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
      >
        <motion.meshBasicMaterial
          animate={{
            color: isHovered ? colorHover : color,
            opacity: isHovered ? 0.5 : 1,
          }}
          initial={{ color: "#000000" }}
          transition={{
            color: { duration: 0.125 },
            duration: 0.125,
            opacity: { duration: 0.5 },
          }}
          transparent={true}
        />
      </Circle>
      {icon && (
        <Svg
          fillMaterial={{ color: colorIcon }}
          strokeMaterial={{ color: colorIcon }}
          name="Icon"
          position={[-radius * 0.4, 0.045, SAFE_OFFSET]}
          scale={0.005}
          src={icon}
        />
      )}
      {tooltip && isHovered && (
        <Html
          visible={false}
          name="Tooltip"
          position={[
            TELEVISION.BUTTON.SIZE * 1.7,
            TELEVISION.BUTTON.SIZE * 0.95,
            0,
          ]}
          style={{
            color: "hsl(120, 100%, 50%)",
            fontFamily: "monospace",
            width: "30em",
            textShadow: "0 0 .5em hsl(0, 0%, 0%)",
          }}
        >
          {tooltip}
        </Html>
      )}
    </group>
  );
};

export { TelevisionButton as Button };
