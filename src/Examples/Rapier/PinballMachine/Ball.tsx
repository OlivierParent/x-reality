import { Sphere, useMatcapTexture } from "@react-three/drei";
import {
  RapierRigidBody,
  RigidBody,
  interactionGroups,
} from "@react-three/rapier";
import { Ref, forwardRef } from "react";

import { INTERACTION } from "Configs/interaction";
import { BALL } from "Examples/Rapier/PinballMachine/Ball.config";
import { MATCAP } from "Libs/matcap";
import { BallProps } from "Types/BallProps";

/**
 * Pinball machine ball.
 *
 * @param {BallProps} props
 * @param {Ref<RapierRigidBody>} ref
 * @returns {JSX.Element}
 */
const RapierPinballMachineBall = forwardRef(
  (props: BallProps, ref?: Ref<RapierRigidBody>): JSX.Element => {
    const { color = 0xffffff, position, radius = 0.125 } = props;

    const [titaniumMatcapTexture] = useMatcapTexture(
      MATCAP.ID.TITANIUM,
      MATCAP.SIZE.XL
    );

    return (
      <RigidBody
        canSleep={false}
        ccd={true}
        colliders="ball"
        collisionGroups={interactionGroups(INTERACTION.BALL, [
          INTERACTION.ATTRACTOR,
          INTERACTION.BALL,
          INTERACTION.BUMPER,
          INTERACTION.FLIPPER,
          INTERACTION.KICKER,
          INTERACTION.PLAYFIELD,
          INTERACTION.PLUNGER,
          INTERACTION.SENSOR,
          INTERACTION.WALL,
        ])}
        friction={BALL.PHYSICS.FRICTION}
        mass={BALL.PHYSICS.MASS}
        position={position}
        ref={ref}
        restitution={BALL.PHYSICS.RESTITUTION}
        solverGroups={interactionGroups(INTERACTION.BALL, [
          INTERACTION.ATTRACTOR,
          INTERACTION.BALL,
          INTERACTION.BUMPER,
          INTERACTION.FLIPPER,
          INTERACTION.KICKER,
          INTERACTION.PLAYFIELD,
          INTERACTION.PLUNGER,
          INTERACTION.WALL,
        ])}
        type="dynamic"
      >
        <Sphere args={[radius]}>
          <meshMatcapMaterial //
            color={color}
            matcap={titaniumMatcapTexture}
          />
        </Sphere>
      </RigidBody>
    );
  }
);

export { RapierPinballMachineBall as Ball };
