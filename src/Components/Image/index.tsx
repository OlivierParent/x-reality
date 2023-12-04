import { GroupProps } from "@react-three/fiber";

import { Image as ImageDefault } from "Components/Image/Default";
import { Image as ImageSvgDrei } from "Components/Image/SvgDrei";
import { useLeva } from "Hooks/Leva/Image";

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
const Image = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { image } = useLeva(IMAGE);

  return (
    <group name="Image" {...props}>
      {image}
    </group>
  );
};

export { Image };
