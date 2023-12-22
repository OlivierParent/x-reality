import { useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { DoubleSide, Vector2 } from "three";

import uvGrid from "Components/Image/assets/UV_Grid_Sm.jpg";

/**
 * Image.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const ImageDefault = (props: GroupProps): JSX.Element => {
  const texture = useTexture(uvGrid);
  texture.offset = new Vector2(0, 0);
  texture.repeat = new Vector2(1, 1);

  return (
    <group name="Texture Image" {...props}>
      <mesh>
        <planeGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} side={DoubleSide} />
      </mesh>
    </group>
  );
};

export { ImageDefault as Image };
