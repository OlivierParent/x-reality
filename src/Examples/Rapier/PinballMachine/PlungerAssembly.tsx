import {
  Box,
  Cylinder,
  useKeyboardControls,
  useMatcapTexture,
} from "@react-three/drei";
import { Euler, Vector2Tuple, Vector3 } from "three";

import {
  RapierRigidBody,
  RigidBody,
  Vector3Tuple,
  interactionGroups,
  usePrismaticJoint,
} from "@react-three/rapier";
import { PLUNGER_ASSEMBLY } from "Examples/Rapier/PinballMachine/PlungerAssembly.config";
import { MATCAP } from "Libs/matcap";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { INTERACTION } from "Configs/interaction";

type PlungerProps = {
  position: Vector3;
};

/**
 * Pinball machine plunger.
 *
 * @param {BumperProps} props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachinePlunger = (
  props: PlungerProps
): React.JSX.Element => {
  const [matcapTitanium] = useMatcapTexture(
    MATCAP.ID.TITANIUM, //
    MATCAP.SIZE.XL
  );

  const { position = new Vector3(0, 0, 0) } = props;

  // References.
  const bodyPlungerRef = useRef<RapierRigidBody>(null!);
  const bodyConstraintARef = useRef<RapierRigidBody>(null!);
  const bodyConstraintBRef = useRef<RapierRigidBody>(null!);

  const plungerJointPosition: Vector3Tuple = [0, 0, 0]; // Position of the joint in local space.
  const constraintJointPosition: Vector3Tuple = [0, 0, 0]; // Position of the joint in local space.

  const jointAxis: Vector3Tuple = [0, 0, 1]; // Axis of the joint.
  const limits: Vector2Tuple = [-0.1, 0.1];

  const shootOn = useKeyboardControls(
    (state) => state.pinballShoot //
  );

  usePrismaticJoint(bodyPlungerRef, bodyConstraintARef, [
    plungerJointPosition,
    constraintJointPosition,
    jointAxis,
    limits,
  ]);
  usePrismaticJoint(bodyPlungerRef, bodyConstraintBRef, [
    plungerJointPosition,
    constraintJointPosition,
    jointAxis,
    limits,
  ]);

  useEffect(() => {
    bodyPlungerRef.current.addForce(new Vector3(0, 0, 9.81), true);
  }, []);

  useEffect(() => {
    console.info("shootOn:", shootOn);
    if (shootOn) {
      bodyPlungerRef.current.applyImpulse(
        {
          x: 0,
          y: 0,
          z: -5,
        },
        true
      );
    }
  }, [shootOn]);

  // useFrame(() => {
  //   bodyPlungerRef.current.applyImpulse({ x: 0, y: 0, z: 0.1 }, true);
  // });

  return (
    <group name="Plunger" position={position}>
      <RigidBody
        collisionGroups={interactionGroups(INTERACTION.WALL, [
          INTERACTION.BALL,
        ])}
        solverGroups={interactionGroups(INTERACTION.WALL, [INTERACTION.BALL])}
        type="fixed"
      >
        <Box
          args={[
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.LENGTH,
          ]}
          position={[
            -(PLUNGER_ASSEMBLY.RAIL.DIAMETER + 0.01),
            PLUNGER_ASSEMBLY.RAIL.DIAMETER / 2,
            -PLUNGER_ASSEMBLY.PLUNGER.LENGTH / 4,
          ]}
        >
          <meshMatcapMaterial matcap={matcapTitanium} />
        </Box>
        <Box
          args={[
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.DIAMETER,
            PLUNGER_ASSEMBLY.RAIL.LENGTH,
          ]}
          position={[
            PLUNGER_ASSEMBLY.RAIL.DIAMETER + 0.01,
            PLUNGER_ASSEMBLY.RAIL.DIAMETER / 2,
            -PLUNGER_ASSEMBLY.PLUNGER.LENGTH / 4,
          ]}
        >
          <meshMatcapMaterial matcap={matcapTitanium} />
        </Box>
      </RigidBody>
      <group position={new Vector3(0, 0.01, 0)}>
        <RigidBody
          friction={0}
          mass={1000}
          name="Plunger"
          ref={bodyPlungerRef}
          type="dynamic"
          collisionGroups={interactionGroups(INTERACTION.PLUNGER, [
            INTERACTION.BALL,
          ])}
          solverGroups={interactionGroups(INTERACTION.PLUNGER, [
            INTERACTION.BALL,
          ])}
        >
          <Cylinder
            args={[
              PLUNGER_ASSEMBLY.PLUNGER.RADIUS,
              PLUNGER_ASSEMBLY.PLUNGER.RADIUS,
              PLUNGER_ASSEMBLY.PLUNGER.LENGTH,
              32,
            ]}
            rotation={new Euler(Math.PI / 2, 0, 0)}
          >
            <meshMatcapMaterial
              matcap={matcapTitanium}
              color={shootOn ? "blue" : "white"}
            />
          </Cylinder>
        </RigidBody>
        <RigidBody
          collisionGroups={interactionGroups(INTERACTION.CONSTRAINT, [])}
          name="Constraint A"
          position={[0, 0, -2]}
          ref={bodyConstraintARef}
          solverGroups={interactionGroups(INTERACTION.CONSTRAINT, [])}
          type="fixed"
        >
          <Box args={[0.1, 0.1, 1]} />
        </RigidBody>
        <RigidBody
          collisionGroups={interactionGroups(INTERACTION.CONSTRAINT, [])}
          name="Constraint B"
          position={[0, 0, 2]}
          ref={bodyConstraintBRef}
          solverGroups={interactionGroups(INTERACTION.CONSTRAINT, [])}
          type="fixed"
        >
          <Box args={[0.1, 0.1, 1]} />
        </RigidBody>
      </group>
    </group>
  );
};

export { RapierPinballMachinePlunger as Plunger };
