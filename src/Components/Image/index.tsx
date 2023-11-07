import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Image as ImageDefault } from "Components/Image/Default";
import { Image as ImageSvgDrei } from "Components/Image/SvgDrei";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const IMAGE = Object.freeze({
  Default: <ImageDefault />,
  Svg: <ImageSvgDrei />,
});

const Image = (props: GroupProps) => {
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
