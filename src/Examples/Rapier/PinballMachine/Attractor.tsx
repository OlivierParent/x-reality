import { Sphere } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { interactionGroups } from "@react-three/rapier";
import { Attractor } from "@react-three/rapier-addons";
import { Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";

const POSITION = new Vector3(0, 0, -5);
const SPHERE = {
  RADIUS: 0.6,
  SEGMENTS: {
    HEIGHT: 8,
    WIDTH: 8,
  },
} as const;

/**
 *  Pinball machine attractor.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierPinballMachineAttractor = (props: GroupProps): JSX.Element => {
  return (
    <group name="Attractor" {...props}>
      <Attractor //
        collisionGroups={interactionGroups(INTERACTION.ATTRACTOR, [
          INTERACTION.BALL,
        ])}
        position={POSITION}
        range={0.05}
        strength={0.01}
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
    </group>
  );
};

export { RapierPinballMachineAttractor as Attractor };
