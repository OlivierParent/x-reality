import { GroupProps, useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  useRapier,
} from "@react-three/rapier";
import { button, useControls } from "leva";
import { useContext, useEffect, useRef, useState } from "react";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";

import { LEVA } from "Configs/leva";
import { ScoreContext } from "Data/ScoreContext";
import { RapierPinballMachineBall as Ball } from "Examples/Rapier/PinballMachine/Ball";
import { RapierPinballMachineBumper as Bumper } from "Examples/Rapier/PinballMachine/Bumper";
import { RapierPinballMachineCabinetWalls as CabinetWalls } from "Examples/Rapier/PinballMachine/Cabinet/Walls";
import { RapierPinballMachineFlipper as Flipper } from "Examples/Rapier/PinballMachine/Flipper";
import { RapierPinballMachinePlayfield as Playfield } from "Examples/Rapier/PinballMachine/Playfield";
import { OrientationValue } from "Types/OrientationValue";

const positionY = 5;
const positionZ = -10;

const ballLeftPosition = new Vector3(-2 * Math.random(), positionY, positionZ);
const ballMiddlePosition = new Vector3(0, positionY - 0.5, positionZ);
const ballRightPosition = new Vector3(2 * Math.random(), positionY, positionZ);
const zeroVelocity = new Vector3(0, 0, 0);

const leftOrientation: OrientationValue = "left";
const rightOrientation: OrientationValue = "right";

/**
 * Pinball machine.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const RapierPinballMachine = (props: GroupProps): JSX.Element => {
  const scoreState = useContext(ScoreContext);
  const [counter, setCounter] = useState<number>(0);
  const ballLeft = useRef<RapierRigidBody>(null);
  const ballMiddle = useRef<RapierRigidBody>(null);
  const ballRight = useRef<RapierRigidBody>(null);
  useControls(
    LEVA.SCHEMA.SIMULATION,
    {
      reset: button(() => reset()),
    },
    { order: LEVA.ORDER.SIMULATION }
  );

  const rapierCtx = useRapier();

  useEffect(() => {
    console.log("Rapier", rapierCtx);

    console.log();
  }, [rapierCtx]);

  useFrame(() => {
    scoreState.add(Math.floor(Math.random() * 2));
  });

  const reset = () => {
    ballLeft.current?.setAngvel(zeroVelocity, true);
    ballLeft.current?.setLinvel(zeroVelocity, true);
    ballLeft.current?.setTranslation(
      ballLeftPosition.setX(-2 * Math.random()),
      true
    );
    ballLeft.current?.setRotation(new Quaternion(), true);

    ballMiddle.current?.setAngvel(zeroVelocity, true);
    ballMiddle.current?.setLinvel(zeroVelocity, true);
    ballMiddle.current?.setTranslation(
      ballMiddlePosition.setX(ballMiddlePosition.x * 1 + Math.random()),
      true
    );
    ballMiddle.current?.setRotation(new Quaternion(), true);

    ballRight.current?.setAngvel(zeroVelocity, true);
    ballRight.current?.setLinvel(zeroVelocity, true);
    ballRight.current?.setTranslation(
      ballRightPosition.setX(-2 * Math.random()),
      true
    );
    ballRight.current?.setRotation(new Quaternion(), true);
  };

  const collisionHandler = () => {
    setCounter((state) => state + 1);
    console.log(counter);
    if (3 < counter) {
      setCounter(0);
      //   reset()
    }
  };

  useFrame((state, delta) => {
    if (
      ballLeft.current?.translation().y! < -5 &&
      ballMiddle.current?.translation().y! < -5 &&
      ballRight.current?.translation().y! < -5
    ) {
      reset();
    }
  });

  return (
    <group name="Pinball Machine Game" {...props}>
      <group name="Tilt" rotation={new Euler(MathUtils.degToRad(20), 0, 0)}>
        <group name="Cabinet">
          <Playfield />
          <CabinetWalls />

          <RigidBody onCollisionEnter={collisionHandler} type="fixed">
            <CuboidCollider
              args={[4.7, 0.125, 0.125]}
              position={new Vector3(0, 0.125, 2)}
              sensor={true}
            />
          </RigidBody>
        </group>
        <group name="Bumpers">
          <Bumper position={new Vector3(0, 0, -2)} />
          <Bumper position={new Vector3(-3, 0, -5)} />
          <Bumper position={new Vector3(3, 0, -5)} />
        </group>
        <group name="Flippers">
          <group position={new Vector3(0, 0, 0)}>
            <Flipper
              orientation={leftOrientation}
              position={new Vector3(-1, 0, 0)}
            />
            <Flipper
              orientation={rightOrientation}
              position={new Vector3(1, 0, 0)}
            />
          </group>
        </group>
        <group name="Balls">
          <Ball
            color="hsl(0, 100%, 75%)"
            position={ballLeftPosition}
            ref={ballLeft}
          />
          <Ball
            color="hsl(120, 100%, 75%)"
            position={ballMiddlePosition}
            ref={ballMiddle}
          />
          <Ball
            color="hsl(240, 100%, 75%)"
            position={ballRightPosition}
            ref={ballRight}
          />
        </group>
      </group>
    </group>
  );
};

export { RapierPinballMachine };
