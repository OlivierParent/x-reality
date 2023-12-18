import { Box, RoundedBox } from "@react-three/drei";

/**
 * Static 3D Scene.
 *
 * @returns {React.JSX.Element}
 */
const StaticScene = () => {
  // Inspiration: https://youtu.be/uAIcKGQyYBg
  return (
    <>
      <group name="Lighting">
        <ambientLight intensity={0.1} />
        <pointLight intensity={10} position={[0, 0, -5]} />
        <spotLight intensity={10} position={[0, 0, -5]} />
        <spotLight intensity={10} position={[0, 0, 5]} />
        <pointLight position={[0, 0, 5]} />
      </group>
      <group name="Objects">
        <group name="Background Objects" position={[0, 0, -5]}>
          {Array(1000)
            .fill(null)
            .map((_, index) => {
              return (
                <Box
                  args={[1, 10, 1]}
                  key={`plane-${index}`}
                  position={[
                    (Math.random() * 2 - 1) * 20,
                    (Math.random() * 2 - 1) * 100,
                    0,
                  ]}
                  rotation={[0, Math.PI * 2 * Math.random(), 0]}
                >
                  <meshStandardMaterial color={0xfffffff * Math.random()} />
                </Box>
              );
            })}
        </group>
        <RoundedBox
          args={[2, 2, 2]}
          position={[0, 0, 0]}
          rotation={[0, Math.PI / 4, Math.PI / 4]}
        />
      </group>
    </>
  );
};

export { StaticScene };
