import { GroupProps } from "@react-three/fiber";

import { Image as ImageDefault } from "Components/Image/Default";
import { Image as ImageSvgDrei } from "Components/Image/SvgDrei";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Image";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DEFAULT]: <ImageDefault />,
  [LEVA_OPTION.SVG]: <ImageSvgDrei />,
} as const;

/**
 * Image.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Image = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { image } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS[LEVA_OPTION.DEFAULT]);

  return (
    <group name="Image" {...props}>
      {image}
    </group>
  );
};

export { Image };
