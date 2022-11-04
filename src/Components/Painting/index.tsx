import { Plane, Text, useTexture } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

const Painting = (props: GroupProps) => {
  const texture = useTexture(
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Vassily_Kandinsky%2C_1925_-In_Blue.jpg"
  );
  const aspectRatio = texture.image.width / texture.image.height;
  const size = 4;

  return (
    <group {...props}>
      <Plane args={[size * aspectRatio, size]}>
        <meshBasicMaterial map={texture} />
      </Plane>
      <Text position={[0, -(size / 2 + 0.1), 0]}>
        Vassily Kandinsky (1925) &mdash; In Blue
      </Text>
    </group>
  );
};

export { Painting };
