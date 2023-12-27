import { Plane } from "@react-three/drei";
import {
  CuboidCollider,
  RigidBody,
  interactionGroups,
} from "@react-three/rapier";
import { Euler, MathUtils, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";
import { PLAYFIELD } from "Examples/Rapier/PinballMachine/Playfield.config";

const OFFSET_Z = -6;

const position = new Vector3(0, 0, OFFSET_Z);
const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);

/**
 * Pinball machine playfield.
 *
 * @returns {JSX.Element}
 */
const RapierPinballMachinePlayfield = (): JSX.Element => {
  return (
    <RigidBody ccd={true} type="fixed">
      <Plane
        args={[PLAYFIELD.WIDTH, PLAYFIELD.HEIGHT]}
        rotation={rotation}
        position={position}
      />
      <CuboidCollider
        args={[
          PLAYFIELD.COLLIDER.WIDTH,
          PLAYFIELD.COLLIDER.HEIGHT,
          PLAYFIELD.COLLIDER.DEPTH,
        ]}
        collisionGroups={interactionGroups(INTERACTION.PLAYFIELD, [
          INTERACTION.BALL,
        ])}
        friction={0.25}
        position={position}
        restitution={0.25}
        solverGroups={interactionGroups(INTERACTION.PLAYFIELD, [
          INTERACTION.BALL,
        ])}
      />
    </RigidBody>
  );
};

export { RapierPinballMachinePlayfield as Playfield };
