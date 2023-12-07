import { Sphere } from "@react-three/drei";
import { Attractor } from "@react-three/rapier-addons";
import { Vector3 } from "three";

const POSITION = new Vector3(0, 0, -5);
const SPHERE = {
  RADIUS: 0.6,
  SEGMENTS: {
    HEIGHT: 8,
    WIDTH: 8,
  },
} as const;

const RapierPinballMachineAttractor = () => {
  return (
    <>
      <Attractor //
        collisionGroups={undefined}
        position={POSITION}
        range={0.5}
        strength={0.02}
        type="linear"
      />
      <Sphere //
        args={[
          SPHERE.RADIUS, //
          SPHERE.SEGMENTS.WIDTH,
          SPHERE.SEGMENTS.HEIGHT,
        ]}
        position={POSITION}
      >
        <meshBasicMaterial //
          color={0xff00ff}
          opacity={0.5}
          transparent={true}
        />
      </Sphere>
    </>
  );
};

export { RapierPinballMachineAttractor as Attractor };
