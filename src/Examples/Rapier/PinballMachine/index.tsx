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
import { Ball } from "Examples/Rapier/PinballMachine/Ball";
import { BALL } from "Examples/Rapier/PinballMachine/Ball.config";
import { Bumper } from "Examples/Rapier/PinballMachine/Bumper";
import { CabinetWalls } from "Examples/Rapier/PinballMachine/Cabinet/Walls";
import { Flipper } from "Examples/Rapier/PinballMachine/Flipper";
import { FLIPPER } from "Examples/Rapier/PinballMachine/Flipper.config";
import { Playfield } from "Examples/Rapier/PinballMachine/Playfield";

const ORIGIN_VECTOR = new Quaternion();
const zeroVelocity = new Vector3(0, 0, 0);

/**
 * Pinball machine.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachine = (props: GroupProps): React.JSX.Element => {
  // Leva.
  useControls(
    LEVA.SCHEMA.SIMULATION,
    {
      reset: button(() => reset()),
    },
    { order: LEVA.ORDER.SIMULATION }
  );

  // Contexts.
  const scoreState = useContext(ScoreContext);
  const rapierCtx = useRapier();

  // References.
  const leftBallRef = useRef<RapierRigidBody>(null!);
  const middleBallRef = useRef<RapierRigidBody>(null!);
  const rightBallRef = useRef<RapierRigidBody>(null!);

  // States.
  const [counter, setCounter] = useState<number>(0);

  // Event handlers.
  const collisionHandler = () => {
    setCounter((state) => state + 1);
    if (3 < counter) {
      setCounter(0);
      // reset();
    }
  };

  function reset() {
    leftBallRef.current.setAngvel(zeroVelocity, true);
    leftBallRef.current.setLinvel(zeroVelocity, true);
    leftBallRef.current.setTranslation(
      BALL.LEFT.POSITION.setX(-2 * Math.random()),
      true
    );
    leftBallRef.current.setRotation(ORIGIN_VECTOR, true);

    middleBallRef.current.setAngvel(zeroVelocity, true);
    middleBallRef.current.setLinvel(zeroVelocity, true);
    middleBallRef.current.setTranslation(
      BALL.MIDDLE.POSITION.setX(BALL.MIDDLE.POSITION.x * 1 + Math.random()),
      true
    );
    middleBallRef.current.setRotation(ORIGIN_VECTOR, true);

    rightBallRef.current.setAngvel(zeroVelocity, true);
    rightBallRef.current.setLinvel(zeroVelocity, true);
    rightBallRef.current.setTranslation(
      BALL.RIGHT.POSITION.setX(-2 * Math.random()),
      true
    );
    rightBallRef.current.setRotation(ORIGIN_VECTOR, true);
  }

  useEffect(() => {
    console.log("Rapier", rapierCtx);
  }, [rapierCtx]);

  useFrame((state, delta) => {
    scoreState.add(Math.floor(Math.random() * 2));
    if (
      leftBallRef.current.translation().y < -5 &&
      middleBallRef.current.translation().y < -5 &&
      rightBallRef.current.translation().y < -5
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
              orientation={FLIPPER.LEFT.ORIENTATION}
              position={FLIPPER.LEFT.POSITION}
            />
            <Flipper
              orientation={FLIPPER.RIGHT.ORIENTATION}
              position={FLIPPER.RIGHT.POSITION}
            />
          </group>
        </group>
        <group name="Balls">
          <Ball
            color={BALL.LEFT.COLOR}
            position={BALL.LEFT.POSITION}
            ref={leftBallRef}
          />
          <Ball
            color={BALL.MIDDLE.COLOR}
            position={BALL.MIDDLE.POSITION}
            ref={middleBallRef}
          />
          <Ball
            color={BALL.RIGHT.COLOR}
            position={BALL.RIGHT.POSITION}
            ref={rightBallRef}
          />
        </group>
      </group>
    </group>
  );
};

export { RapierPinballMachine };
