import { Sphere, useMatcapTexture } from "@react-three/drei";
import {
  RapierRigidBody,
  RigidBody,
  interactionGroups,
} from "@react-three/rapier";
import { Ref, forwardRef } from "react";

import { INTERACTION } from "Configs/interaction";
import { MATCAP } from "Libs/matcap";
import { BallProps } from "Types/BallProps";

/**
 * Pinball machine ball.
 *
 * @param {BallProps} props
 * @param {Ref<RapierRigidBody>} ref
 * @returns {React.JSX.Element}
 */
const RapierPinballMachineBall = forwardRef(
  (props: BallProps, ref?: Ref<RapierRigidBody>): React.JSX.Element => {
    const { color = 0xffffff, position, radius = 0.125 } = props;

    const [matcapTitanium] = useMatcapTexture(
      MATCAP.ID.TITANIUM,
      MATCAP.SIZE.XL
    );

    return (
      <RigidBody
        colliders="ball"
        collisionGroups={interactionGroups(INTERACTION.BALL, [
          INTERACTION.BUMPER,
          INTERACTION.FLIPPER,
          INTERACTION.KICKER,
          INTERACTION.PLUNGER,
          INTERACTION.SENSOR,
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
          <meshMatcapMaterial //
            color={color}
            matcap={matcapTitanium}
          />
        </Sphere>
      </RigidBody>
    );
  }
);

export { RapierPinballMachineBall as Ball };
