import { GroupProps, useFrame } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  interactionGroups,
  useRapier,
} from "@react-three/rapier";
import { button, useControls } from "leva";
import {
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Euler, MathUtils, Quaternion, Vector3 } from "three";

import { INTERACTION } from "Configs/interaction";
import { LEVA } from "Configs/leva";
import { ScoreContext } from "Data/ScoreContext";
import { Attractor } from "Examples/Rapier/PinballMachine/Attractor";
import { Ball } from "Examples/Rapier/PinballMachine/Ball";
import { BALL, POSITION } from "Examples/Rapier/PinballMachine/Ball.config";
import { Bumper } from "Examples/Rapier/PinballMachine/Bumper";
import { CabinetWalls } from "Examples/Rapier/PinballMachine/Cabinet/Walls";
import { Flipper } from "Examples/Rapier/PinballMachine/Flipper";
import { FLIPPER } from "Examples/Rapier/PinballMachine/Flipper.config";
import { Playfield } from "Examples/Rapier/PinballMachine/Playfield";

const ZERO_QUATERNION = new Quaternion();
const ZERO_VECTOR = new Vector3();

/**
 * Reset position, rotation, and velocity of an object.
 *
 * @param {MutableRefObject<RapierRigidBody>} object
 * @param {Vector3} position
 */
function resetObject(
  object: MutableRefObject<RapierRigidBody>,
  position: Vector3
) {
  object.current.setAngvel(ZERO_VECTOR, true); // Angular velocity.
  object.current.setLinvel(ZERO_VECTOR, true); // Linear velocity.
  object.current.setTranslation(position, true); // Position.
  object.current.setRotation(ZERO_QUATERNION, true); // Rotation.
}

/**
 * Pinball machine.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const RapierPinballMachine = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  useControls(
    LEVA.SCHEMA.SIMULATION,
    {
      "Store Snapshot": button(() => storeSnapshot()),
      "Restore Snapshot": button(() => restoreSnapshot()),
      Reset: button(() => reset()),
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
  const snapshotRef = useRef<Uint8Array>(null!);

  // States.
  const [counter, setCounter] = useState<number>(0);

  // Event handlers.
  const collisionHandler = () => {
    console.info("Rapier: collision detected!");
    setCounter((state) => state + 1);
  };

  const reset = useCallback(() => {
    console.info("Rapier: resetting...");
    BALL.LEFT.POSITION.setX(-POSITION.X.EXTREMITY * (Math.random() + 0.5));
    BALL.MIDDLE.POSITION.setX(POSITION.X.CENTER * (Math.random() * 2 - 1));
    BALL.RIGHT.POSITION.setX(POSITION.X.EXTREMITY * (Math.random() + 0.5));
    resetObject(leftBallRef, BALL.LEFT.POSITION);
    resetObject(middleBallRef, BALL.MIDDLE.POSITION);
    resetObject(rightBallRef, BALL.RIGHT.POSITION);
  }, []);

  const restoreSnapshot = useCallback(() => {
    console.info("Rapier: restoring snapshot...");
    const snapshot = rapierCtx.rapier.World.restoreSnapshot(
      snapshotRef.current
    );
    rapierCtx.setWorld(snapshot);
  }, [rapierCtx]);

  const storeSnapshot = useCallback(() => {
    console.info("Rapier: taking snapshot...");
    const snapshot = rapierCtx.world.takeSnapshot();
    snapshotRef.current = snapshot;
  }, [rapierCtx]);

  useEffect(() => {
    console.info("Rapier: counter", counter);
    if (3 <= counter) {
      setTimeout(() => {
        console.info("Rapier: calling reset.");
        reset();
      }, 2000);
      setCounter(0);
    }
  }, [counter, reset]);

  useEffect(() => {
    setTimeout(() => {
      storeSnapshot();
    }, 250);
  }, [storeSnapshot]);

  useFrame((state, delta) => {
    scoreState.add(Math.floor(Math.random() * 2));
  });

  return (
    <group name="Pinball Machine Game" {...props}>
      <group name="Tilt" rotation={new Euler(MathUtils.degToRad(20), 0, 0)}>
        <group name="Cabinet">
          <Playfield />
          <CabinetWalls />
          <RigidBody type="fixed">
            <CuboidCollider
              args={[4.7, 0.125, 0.125]}
              collisionGroups={interactionGroups(INTERACTION.SENSOR, [
                INTERACTION.BALL,
              ])}
              onCollisionExit={collisionHandler}
              position={new Vector3(0, 0.125, 2)}
              sensor={true}
            />
          </RigidBody>
        </group>
        <group name="Attractor">
          <Attractor />
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
  );
};

export { RapierPinballMachine };
