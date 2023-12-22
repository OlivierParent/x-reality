import { Plane, Text, useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

const PAINTING = {
  CAPTION: "In Blue\u2014Wassily Kandinsky (1925)",
  SIZE: 4,
  TEXTURE:
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Vassily_Kandinsky%2C_1925_-In_Blue.jpg",
} as const;

/**
 * Painting.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Painting = (props: GroupProps): JSX.Element => {
  const texture = useTexture(PAINTING.TEXTURE);
  const aspectRatio = texture.image.width / texture.image.height;

  return (
    <group {...props}>
      <Plane args={[PAINTING.SIZE * aspectRatio, PAINTING.SIZE]}>
        <meshBasicMaterial map={texture} />
      </Plane>
      <Text
        fontSize={PAINTING.SIZE * 0.05}
        position={[0, -(PAINTING.SIZE / 2 + PAINTING.SIZE * 0.05), 0]}
      >
        {PAINTING.CAPTION}
      </Text>
    </group>
  );
};

export { Painting };
