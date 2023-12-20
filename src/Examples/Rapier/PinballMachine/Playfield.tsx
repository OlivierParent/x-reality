import { Plane } from "@react-three/drei";
import {
  CuboidCollider,
  RigidBody,
  interactionGroups,
} from "@react-three/rapier";
import { INTERACTION } from "Configs/interaction";
import { Euler, MathUtils, Vector3 } from "three";

const OFFSET_Z = -6;
const PLAYFIELD = {
  WIDTH: 10,
  HEIGHT: 16,
  THICKNESS: 0.125,
} as const;
const PLAYFIELD_COLLIDER = {
  WIDTH: PLAYFIELD.WIDTH / 2,
  HEIGHT: PLAYFIELD.THICKNESS / 2,
  DEPTH: PLAYFIELD.HEIGHT / 2,
} as const;

const position = new Vector3(0, 0, OFFSET_Z);
const rotation = new Euler(MathUtils.degToRad(-90), 0, 0);

/**
 * Pinball machine playfield.
 *
 * @returns {React.JSX.Element}
 */
const RapierPinballMachinePlayfield = (): React.JSX.Element => {
  return (
    <RigidBody ccd={true} type="fixed">
      <Plane
        args={[PLAYFIELD.WIDTH, PLAYFIELD.HEIGHT]}
        rotation={rotation}
        position={position}
      />
      <CuboidCollider
        args={[
          PLAYFIELD_COLLIDER.WIDTH,
          PLAYFIELD_COLLIDER.HEIGHT,
          PLAYFIELD_COLLIDER.DEPTH,
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
