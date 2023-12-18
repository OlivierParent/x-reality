import { GroupProps } from "@react-three/fiber";

const SIZE = 1;
const TRIPOD = {
  LENGTH: SIZE,
  RADIUS: (SIZE / 100) * 2,
  SEGMENTS: 32,
  THICKNESS: SIZE / 100,
};

/**
 * Tripod model.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Tripod = (props: GroupProps): React.JSX.Element => {
  return (
    <group name="Tripod" {...props}>
      <mesh>
        <boxGeometry
          args={
            [1, 1, 1].map((value) => value * 1.5 * TRIPOD.THICKNESS) as [
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
              key={`axis-${index}`}
              position={
                [0, 0, 0].map((v, i) =>
                  index === i ? TRIPOD.LENGTH / 2 + TRIPOD.THICKNESS * 2 : v
                ) as [number, number, number]
              }
            >
              <mesh name="Axis">
                <boxGeometry
                  args={
                    [1, 1, 1].map(
                      (v, i) =>
                        v * (index === i ? TRIPOD.LENGTH : TRIPOD.THICKNESS)
                    ) as [number, number, number]
                  }
                />
                <meshBasicMaterial color={0xff0000 >> (8 * index)} />
              </mesh>
              <mesh
                name="Point"
                position={
                  [0, 0, 0].map((v, i) =>
                    index === i ? TRIPOD.LENGTH / 2 + TRIPOD.THICKNESS * 3 : v
                  ) as [number, number, number]
                }
              >
                <meshBasicMaterial color={0xffffff} />
                <sphereGeometry
                  args={[TRIPOD.RADIUS, TRIPOD.SEGMENTS, TRIPOD.SEGMENTS]}
                />
              </mesh>
            </group>
          );
        })}
    </group>
  );
};

export { Tripod };
