import { Plane, Text } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { FONT_FAMILY } from "Libs/font";

const length = Object.keys(FONT_FAMILY).length;

/**
 * Lorem ipsum text.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const LipsumFonts = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
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

  const lineSize = size * 2.5;
  const start = (-length * lineSize) / 2 + size;

  return (
    <group name="Fonts" {...props}>
      {Object.keys(FONT_FAMILY)
        .sort((a: string, b: string): number => {
          const fontFamilyA = FONT_FAMILY[a as keyof typeof FONT_FAMILY].name;
          const fontFamilyB = FONT_FAMILY[b as keyof typeof FONT_FAMILY].name;

          return fontFamilyA < fontFamilyB
            ? 1
            : fontFamilyA > fontFamilyB
            ? -1
            : 0;
        })
        .map((key, index) => {
          const fontFamily = FONT_FAMILY[key as keyof typeof FONT_FAMILY];

          return (
            <group position={[0, start + index * lineSize, 0]}>
              <Text position={[0, size, 0]}>{fontFamily.name}</Text>
              <Text
                color={color}
                font={fontFamily.url}
                fontSize={size}
                key={fontFamily.name}
                textAlign="center"
              >
                {string}
              </Text>
              <Plane args={[16, 0.01]} position={[0, -size, 0]} />
            </group>
          );
        })}
    </group>
  );
};

export { LipsumFonts as Lipsum };
