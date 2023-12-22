import {
  Cylinder,
  useKeyboardControls,
  useMatcapTexture,
} from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  Vector3Tuple,
  interactionGroups,
  usePrismaticJoint,
} from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { Euler, Vector2Tuple, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";
import { BALL } from "Examples/Rapier/PinballMachine/Ball.config";
import { PLUNGER_ASSEMBLY } from "Examples/Rapier/PinballMachine/PlungerAssembly.config";
import { MATCAP } from "Libs/matcap";

/**
 * Pinball machine plunger.
 *
 * @returns {JSX.Element}
 */
const Plunger = (props: GroupProps): JSX.Element => {
  // Matcap Textures.
  const [titaniumMatcapTexture] = useMatcapTexture(
    MATCAP.ID.TITANIUM, //
    MATCAP.SIZE.XL
  );

  // Keyboard Controls.
  const shootOn = useKeyboardControls(
    (state) => state.pinballShoot //
  );

  // References.
  const bodyConstraintRef = useRef<RapierRigidBody>(null!);
  const bodyPlungerRef = useRef<RapierRigidBody>(null!);

  // Joint.
  const constraintJointPosition: Vector3Tuple = [0, 0, 0]; // Position of the joint in local space.
  const jointAxis: Vector3Tuple = [0, 0, -1]; // Axis of the joint.
  const limits: Vector2Tuple = [0, 0.8]; // Lower and upper movement limits of the joint.
  const plungerJointPosition: Vector3Tuple = [0, 0, 0]; // Position of the joint in local space.

  usePrismaticJoint(bodyPlungerRef, bodyConstraintRef, [
    plungerJointPosition,
    constraintJointPosition,
    jointAxis,
    limits,
  ]);

  useEffect(() => {
    bodyPlungerRef.current.addForce(new Vector3(0, 0, 10), true);
  }, []);

  useEffect(() => {
    console.info("shootOn:", shootOn);
    if (shootOn) {
      bodyPlungerRef.current.applyImpulse(
        {
          x: 0,
          y: 0,
          z: -20,
        },
        true
      );
    }
  }, [shootOn]);
  return (
    <group {...props}>
      <RigidBody
        canSleep={false}
        ccd={true}
        colliders={false}
        friction={0}
        mass={10}
        name="Plunger"
        ref={bodyPlungerRef}
        restitution={0}
        type="dynamic"
      >
        <CuboidCollider
          args={[BALL.RADIUS, BALL.RADIUS, PLUNGER_ASSEMBLY.PLUNGER.LENGTH / 2]}
          collisionGroups={interactionGroups(INTERACTION.PLUNGER, [
            INTERACTION.BALL,
          ])}
          mass={1}
          solverGroups={interactionGroups(INTERACTION.PLUNGER, [
            INTERACTION.BALL,
          ])}
        />
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
            color={shootOn ? "blue" : "white"}
            matcap={titaniumMatcapTexture}
          />
        </Cylinder>
      </RigidBody>
      <RigidBody
        canSleep={false}
        ccd={true}
        colliders={false}
        collisionGroups={interactionGroups(INTERACTION.CONSTRAINT, [
          INTERACTION.PLUNGER,
        ])}
        name="Plunger Constraint"
        position={[0, 0.1, 0]}
        ref={bodyConstraintRef}
        solverGroups={interactionGroups(INTERACTION.CONSTRAINT, [
          INTERACTION.PLUNGER,
        ])}
        type="fixed"
      >
        <CuboidCollider args={[0.1, 0.1, 0.1]} />
      </RigidBody>
    </group>
  );
};

export { Plunger };
