import { Svg } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Vector3 } from "three";

import arteveldehogeschoolLogo from "Components/Image/assets/arteveldehogeschool_logo.svg";
import svgLogo from "Components/Image/assets/SVG_logo.svg";

const svgLogoUrl =
  "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg";

const images = [
  {
    position: new Vector3(0, 0, -1),
    src: svgLogoUrl,
  },
  {
    position: new Vector3(0, 0, 0),
    src: arteveldehogeschoolLogo,
  },
  {
    position: new Vector3(0, 0, 1),
    src: svgLogo,
  },
];

const SCALE = 0.0075;

/**
 * Image.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ImageSvgDrei = (props: GroupProps): React.JSX.Element => {
  return (
    <group name="SVG Image" {...props}>
      {images.map(({ position, src }, index) => (
        <Svg position={position} key={index} scale={SCALE} src={src} />
      ))}
    </group>
  );
};

export { ImageSvgDrei as Image };
