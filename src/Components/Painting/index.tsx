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
      <Text fontSize={size * 0.05} position={[0, -(size / 2 + size * 0.05), 0]}>
        In Blue &mdash; Vassily Kandinsky (1925)
      </Text>
    </group>
  );
};

export { Painting };
