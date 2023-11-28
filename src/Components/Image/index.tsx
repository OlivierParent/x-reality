import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Image as ImageDefault } from "Components/Image/Default";
import { Image as ImageSvgDrei } from "Components/Image/SvgDrei";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const IMAGE = {
  Default: <ImageDefault />,
  Svg: <ImageSvgDrei />,
} as const;

/**
 * Image.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Image = (props: GroupProps) => {
  // Leva Controls.
  const { image } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      image: {
        label: "Image",
        options: IMAGE,
        value: IMAGE.Default,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <group name="Image" {...props}>
      {image}
    </group>
  );
};

export { Image };
