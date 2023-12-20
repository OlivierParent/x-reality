import { Box, Sphere, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  BallCollider,
  RapierRigidBody,
  RevoluteJointParams,
  RigidBody,
  Vector3Tuple,
  interactionGroups,
  useRevoluteJoint,
} from "@react-three/rapier";
import { useMemo, useRef } from "react";
import { Euler, MathUtils, Mesh, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";
import { FlipperProps } from "Types/FlipperProps";
import { OrientationValue } from "Types/OrientationValue";

const HELPER_SIZE = 0.25;
const IMPULSE_VECTOR = new Vector3(0, 0, 0.01);
const SAFE_OFFSET = 0.1; // Prevent Z Fighting.
enum COLOR {
  RED = 0xff0000,
  GREEN = 0x00ff00,
  BLUE = 0x0000ff,
}

/**
 * Pinball machine flipper.
 *
 * @param props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachineFlipper = (
  props: FlipperProps
): React.JSX.Element => {
  const { orientation, position = new Vector3(0, 0, 0) } = props;

  // Keyboard Controls.
  const flipperBothOn = useKeyboardControls(
    (state) => state.pinballFlipperBoth //
  );
  const flipperLeftOn = useKeyboardControls(
    (state) => state.pinballFlipperLeft
  );
  const flipperRightOn = useKeyboardControls(
    (state) => state.pinballFlipperRight
  );

  const isLeft = orientation === ("left" as OrientationValue);
  const isPressed = flipperBothOn || (isLeft ? flipperLeftOn : flipperRightOn);

  const color = isPressed ? COLOR.BLUE : isLeft ? COLOR.RED : COLOR.GREEN;
  const rotationY = MathUtils.degToRad((isLeft ? -1 : 1) * 40);
  const positionX = (isLeft ? 1 : -1) * 0.8;

  // References.
  const meshRef = useRef<Mesh>(null!);
  const bodyDynamicRef = useRef<RapierRigidBody>(null!);
  const bodyFixedRef = useRef<RapierRigidBody>(null!);

  // Joint.
  const bodyDynamicAnchor: Vector3Tuple = [0, 0, 0];
  const bodyFixedAnchor: Vector3Tuple = [0, 0, 0];
  const axis: Vector3Tuple = [0, 1, 0];
  const params: RevoluteJointParams = [
    bodyDynamicAnchor,
    bodyFixedAnchor,
    axis,
  ];
  useRevoluteJoint(bodyDynamicRef, bodyFixedRef, params);

  const impulsePoint = useMemo(
    () =>
      new Vector3(
        positionX + (isLeft ? -1 : 1) * 10, //
        0.25,
        0.3
      ),
    [isLeft, positionX]
  );

  useFrame((state, delta) => {
    if (isPressed) {
      bodyDynamicRef.current.applyImpulseAtPoint(
        IMPULSE_VECTOR,
        impulsePoint,
        true
      );
    }
  });

  return (
    <group name="Flipper Assembly" position={position}>
      <RigidBody
        canSleep={false} // Important or it will not always update!
        ccd={true}
        colliders="cuboid"
        collisionGroups={interactionGroups(INTERACTION.FLIPPER, [
          INTERACTION.BALL,
          INTERACTION.CONSTRAINT,
        ])}
        mass={1}
        name="Flipper"
        ref={bodyDynamicRef}
        restitution={2}
        rotation={new Euler(0, rotationY, 0)}
        type="dynamic"
        solverGroups={interactionGroups(INTERACTION.FLIPPER, [
          INTERACTION.BALL,
          INTERACTION.CONSTRAINT,
        ])}
      >
        <mesh
          ref={meshRef}
          position={new Vector3(positionX / 2, 0.125 + SAFE_OFFSET, 0)}
        >
          <boxGeometry args={[1, 0.25, 0.3]} />
          <meshStandardMaterial color={color} transparent={false} />
        </mesh>
      </RigidBody>

      <RigidBody name="Fixation" ref={bodyFixedRef} type="fixed">
        <Box args={[HELPER_SIZE / 4, HELPER_SIZE / 4, HELPER_SIZE / 4]} />
      </RigidBody>

      <RigidBody name="Flipper Constraints" type="fixed">
        <BallCollider
          args={[0.1]}
          collisionGroups={interactionGroups(INTERACTION.CONSTRAINT)}
          name="Flipper Constraint Upper"
          position={[
            (0.8 - 0.1) * (isLeft ? 1 : -1), //
            0.125 + SAFE_OFFSET,
            0,
          ]}
          restitution={-999}
        />
        <BallCollider
          args={[0.1]}
          collisionGroups={interactionGroups(INTERACTION.CONSTRAINT)}
          name="Flipper Constraint Lower"
          position={[
            (0.8 - 0.5) * (isLeft ? 1 : -1), //
            0.125 + SAFE_OFFSET,
            0.7,
          ]}
          restitution={-999}
        />
      </RigidBody>

      <Sphere
        name="Impulse point visualisation"
        args={[HELPER_SIZE, 4, 4]}
        position={impulsePoint}
      >
        <meshBasicMaterial //
          color={COLOR.BLUE}
          wireframe={true}
        />
      </Sphere>
    </group>
  );
};

export { RapierPinballMachineFlipper as Flipper };
