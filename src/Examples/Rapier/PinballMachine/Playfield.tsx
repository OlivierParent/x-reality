import { Plane } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Euler, MathUtils, Vector3 } from "three";

const width = 10;
const height = 16;
const thickness = 0.125;

const halfWidth = width / 2;
const halfHeight = thickness / 2;
const halfDepth = height / 2;

const offsetZ = -6;

/**
 * Pinball machine playfield.
 *
 * @returns {JSX.Element}
 */
const RapierPinballMachinePlayfield = (): JSX.Element => {
  return (
    <RigidBody type="fixed">
      <Plane
        args={[width, height]}
        rotation={new Euler(MathUtils.degToRad(-90), 0, 0)}
        position={new Vector3(0, 0, offsetZ)}
      />
      <CuboidCollider
        args={[halfWidth, halfHeight, halfDepth]}
        restitution={0.25}
        position={new Vector3(0, 0, offsetZ)}
      />
    </RigidBody>
  );
};

export { RapierPinballMachinePlayfield };
