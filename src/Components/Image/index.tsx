import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { ImageDefault as Default } from "Components/Image/Default";
import { ImageSvgDrei as SvgDrei } from "Components/Image/SvgDrei";

const IMAGE = Object.freeze({
  Default: "Default",
  Svg: "Svg (Drei)",
});

const Image = (props: GroupProps) => {
  const { useImage } = useControls("Components", {
    useImage: {
      label: "Image",
      options: IMAGE,
      value: IMAGE.Default,
    },
  });

  function enableImage(name: string, element: JSX.Element) {
    return useImage === name ? element : null;
  }

  return (
    <group name="Image" {...props}>
      {enableImage(IMAGE.Default, <Default />)}
      {enableImage(IMAGE.Svg, <SvgDrei />)}
    </group>
  );
};

export { Image };
