import { Box, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  BallCollider,
  interactionGroups,
  RapierRigidBody,
  RevoluteJointParams,
  RigidBody,
  useRevoluteJoint,
  Vector3Tuple,
} from "@react-three/rapier";
import { useRef } from "react";
import { Euler, MathUtils, Mesh, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";
import { FlipperProps } from "Types/FlipperProps";
import { OrientationValue } from "Types/OrientationValue";

const SAFE_OFFSET = 0.1; // Prevent Z Fighting.

/**
 * Pinball machine flipper.
 *
 * @param props
 * @returns {JSX.Element}
 */
const RapierPinballMachineFlipper = (props: FlipperProps): JSX.Element => {
  const { orientation, position = new Vector3(0, 0, 0) } = props;

  const pressedFlipperLeft = useKeyboardControls(
    ({ pinballFlipperLeft }) => pinballFlipperLeft
  );
  const pressedFlipperRight = useKeyboardControls(
    ({ pinballFlipperRight }) => pinballFlipperRight
  );
  const pressedShoot = useKeyboardControls(({ shoot }) => shoot);

  const isLeft = orientation === ("left" as OrientationValue);
  const isPressed =
    pressedShoot || (isLeft ? pressedFlipperLeft : pressedFlipperRight);

  const color = isPressed ? 0x0000ff : isLeft ? 0xff0000 : 0x00ff00;
  const rotationY = 40 * (isLeft ? -1 : 1);
  const positionX = 0.8 * (isLeft ? 1 : -1);

  // References.
  const meshRef = useRef<Mesh>(null!);
  const bodyDynamicRef = useRef<RapierRigidBody>(null!);
  const bodyFixedRef = useRef<RapierRigidBody>(null!);

  const bodyDynamicAnchor: Vector3Tuple = [0, 0, 0];
  const bodyFixedAnchor: Vector3Tuple = [0, 0, 0];
  const axis: Vector3Tuple = [0, 1, 0];

  const params: RevoluteJointParams = [
    bodyDynamicAnchor,
    bodyFixedAnchor,
    axis,
  ];
  const joint = useRevoluteJoint(bodyDynamicRef, bodyFixedRef, params);
  console.log(joint);

  const impulseVector = { x: 0, y: 0, z: 10 };
  const impulsePoint = {
    x: positionX + 10 * (isLeft ? -1 : 1),
    y: 0.25,
    z: 0.3,
  };

  useFrame((state, delta) => {
    if (isPressed) {
      bodyDynamicRef.current.applyImpulseAtPoint(
        impulseVector,
        impulsePoint,
        true
      );
    }
  });

  return (
    <group position={position}>
      <RigidBody
        colliders="cuboid"
        collisionGroups={interactionGroups(INTERACTION.FLIPPER, [
          INTERACTION.BALL,
          INTERACTION.CONSTRAINT,
          INTERACTION.FLIPPER,
        ])}
        mass={100}
        name="Flipper"
        ref={bodyDynamicRef}
        restitution={2.5}
        rotation={new Euler(0, MathUtils.degToRad(rotationY), 0)}
        type="dynamic"
        solverGroups={interactionGroups(INTERACTION.FLIPPER, [
          INTERACTION.BALL,
          INTERACTION.CONSTRAINT,
          INTERACTION.FLIPPER,
        ])}
      >
        <mesh
          ref={meshRef}
          position={new Vector3(positionX / 2, 0.125 + SAFE_OFFSET, 0)}
        >
          <boxGeometry args={[positionX, 0.25, 0.3]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </RigidBody>
      <RigidBody name="Fixation" ref={bodyFixedRef} type="fixed">
        <Box args={[SAFE_OFFSET / 4, SAFE_OFFSET / 4, SAFE_OFFSET / 4]} />
      </RigidBody>
      <RigidBody ref={null} type="fixed">
        <BallCollider
          args={[0.1]}
          collisionGroups={interactionGroups(INTERACTION.CONSTRAINT)}
          name="Upper Constraint"
          position={[(0.8 - 0.1) * (isLeft ? 1 : -1), 0.125 + SAFE_OFFSET, 0]}
          restitution={-99}
        />
        <BallCollider
          args={[0.1]}
          collisionGroups={interactionGroups(INTERACTION.CONSTRAINT)}
          name="Lower Constraint"
          position={[(0.8 - 0.5) * (isLeft ? 1 : -1), 0.125 + SAFE_OFFSET, 0.7]}
          restitution={-99}
        />
      </RigidBody>
    </group>
  );
};

export { RapierPinballMachineFlipper };
