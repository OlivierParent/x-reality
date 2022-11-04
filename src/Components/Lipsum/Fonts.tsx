import { Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { FONT_FAMILY } from "Libs/font";

const length = Object.keys(FONT_FAMILY).length;

const LipsumFonts = (props: GroupProps) => {
  const { color, size, string } = useControls("Components", {
    color: {
      label: "Color",
      value: "#ffffff",
    },
    size: {
      label: "Size",
      value: 0.5,
      min: 0.1,
      max: 1,
    },
    string: {
      label: "String",
      value: "Lorem ipsum dolor sit amet.",
    },
  });

  const start = (-length * size) / 2;

  return (
    <group name="Fonts" {...props}>
      {Object.keys(FONT_FAMILY).map((key, index) => {
        const fontFamily = FONT_FAMILY[key as keyof typeof FONT_FAMILY];

        return (
          <Text
            color={color}
            font={fontFamily.url}
            fontSize={size}
            key={fontFamily.name}
            position={[0, start + index * size, 0]}
          >
            {string}
          </Text>
        );
      })}
    </group>
  );
};

export { LipsumFonts };
