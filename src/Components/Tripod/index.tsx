import { GroupProps } from "@react-three/fiber";

const length = 1;
const radius = (length / 100) * 2;
const segments = 32;
const thickness = length / 100;

/**
 * Tripod model.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Tripod = (props: GroupProps): JSX.Element => {
  return (
    <group name="Tripod" {...props}>
      <mesh>
        <boxGeometry
          args={
            [1, 1, 1].map((value) => value * 1.5 * thickness) as [
              number,
              number,
              number
            ]
          }
        />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
      {Array(3)
        .fill(null)
        .map((value, index) => {
          return (
            <group
              key={index}
              position={
                [0, 0, 0].map((v, i) =>
                  index === i ? length / 2 + thickness * 2 : v
                ) as [number, number, number]
              }
            >
              <mesh name="Axis">
                <boxGeometry
                  args={
                    [1, 1, 1].map(
                      (v, i) => v * (index === i ? length : thickness)
                    ) as [number, number, number]
                  }
                />
                <meshBasicMaterial color={0xff0000 >> (8 * index)} />
              </mesh>
              <mesh
                name="Point"
                position={
                  [0, 0, 0].map((v, i) =>
                    index === i ? length / 2 + thickness * 3 : v
                  ) as [number, number, number]
                }
              >
                <meshBasicMaterial color={0xffffff} />
                <sphereGeometry args={[radius, segments, segments]} />
              </mesh>
            </group>
          );
        })}
    </group>
  );
};

export { Tripod };
