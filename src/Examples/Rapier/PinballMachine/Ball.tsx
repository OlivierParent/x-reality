import { Sphere, useMatcapTexture } from "@react-three/drei";
import {
  interactionGroups,
  RigidBody,
  RigidBodyApi,
} from "@react-three/rapier";
import { forwardRef, Ref } from "react";

import { INTERACTION } from "Configs/interaction";
import { MATCAP } from "Libs/matcap";
import { BallProps } from "Types/BallProps";

/**
 * Pinball machine ball.
 *
 * @param {BallProps} props
 * @param {Ref<RigidBodyApi>} ref
 * @returns {JSX.Element}
 */
const RapierPinballMachineBall = forwardRef(
  (props: BallProps, ref?: Ref<RigidBodyApi>): JSX.Element => {
    const { color = 0xffffff, position, radius = 0.125 } = props;

    const [matcap] = useMatcapTexture(MATCAP.ID.WORN_GOLD, MATCAP.SIZE.XL);

    return (
      <RigidBody
        colliders="ball"
        collisionGroups={interactionGroups(INTERACTION.BALL, [
          INTERACTION.BUMPER,
          INTERACTION.FLIPPER,
          INTERACTION.KICKER,
          INTERACTION.PLUNGER,
        ])}
        density={1}
        friction={undefined}
        position={position}
        ref={ref}
        restitution={0}
        type="dynamic"
        solverGroups={interactionGroups(INTERACTION.BALL, [
          INTERACTION.BUMPER,
          INTERACTION.FLIPPER,
          INTERACTION.KICKER,
          INTERACTION.PLUNGER,
        ])}
      >
        <Sphere args={[radius]}>
          <meshMatcapMaterial color={color} matcap={matcap} />
        </Sphere>
      </RigidBody>
    );
  }
);

export { RapierPinballMachineBall };
