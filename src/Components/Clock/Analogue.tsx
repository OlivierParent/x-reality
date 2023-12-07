import { Text } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { DoubleSide, Group, MathUtils } from "three";

import { CLOCK } from "Components/Clock/Analogue.config";

import { MathCircle } from "Utils/MathCircle";

/**
 * Is a given mark the first hour mark.
 *
 * @param {number} mark
 * @returns {boolean}
 */
function isFirstHour(mark: number): boolean {
  return !(mark % CLOCK.HH);
}

/**
 * Is a given mark an hour mark.
 *
 * @param {number} mark
 * @returns {boolean}
 */
function isHour(mark: number): boolean {
  return !(mark % (CLOCK.MM / CLOCK.HH));
}

const ANGLE_START = 90;
const BRAND_NAME = "/ɔ.li.vje pa.ʁɑ̃/";
const SAFE_OFFSET = 0.001; // Prevent Z Fighting.

/**
 * Clock Face.
 *
 * @returns {React.JSX.Element}
 */
const Face = (): React.JSX.Element => {
  return (
    <group name="Face">
      <group name="Plate">
        <mesh receiveShadow={true}>
          <circleGeometry args={[CLOCK.SIZE, CLOCK.MM]} />
          <meshStandardMaterial
            color={CLOCK.PLATE.COLOR}
            opacity={0.75}
            side={DoubleSide}
            transparent={true}
          />
        </mesh>
      </group>
      <group
        name="Marks"
        position={[
          0, //
          0,
          CLOCK.MARK.THICKNESS / 2 + SAFE_OFFSET,
        ]}
        rotation={[
          0, //
          0,
          MathUtils.degToRad(ANGLE_START),
        ]}
      >
        {Array(CLOCK.MM)
          .fill(null)
          .map((_, index) => {
            const angle = -(360 / CLOCK.MM) * index;
            const isFirstHH = isFirstHour(index);
            const isHH = isHour(index);

            return (
              <group
                name="Mark"
                key={index}
                rotation={[
                  0, //
                  0,
                  MathUtils.degToRad(angle),
                ]}
              >
                <mesh
                  castShadow={true}
                  position={[
                    CLOCK.SIZE - CLOCK.MARK.OFFSET * 1.5, //
                    0,
                    0,
                  ]}
                >
                  <boxGeometry
                    args={[
                      isHH ? CLOCK.MARK.HH.LENGTH : CLOCK.MARK.MM.LENGTH,
                      isHH ? CLOCK.MARK.HH.WIDTH : CLOCK.MARK.MM.WIDTH,
                      CLOCK.MARK.THICKNESS,
                    ]}
                  />
                  <meshStandardMaterial
                    color={
                      isHH
                        ? isFirstHH
                          ? CLOCK.MARK.HH.COLOR_FIRST
                          : CLOCK.MARK.HH.COLOR
                        : CLOCK.MARK.MM.COLOR
                    }
                  />
                </mesh>
              </group>
            );
          })}
      </group>
      <group name="Hours">
        {Array(CLOCK.HH)
          .fill(null)
          .map((_, index) => {
            const radius = CLOCK.MARK.HH.LENGTH * 7.75;
            const c = new MathCircle(radius);
            const angle = ANGLE_START - (360 / CLOCK.HH) * index;
            const { x, y } = c.getCoordinates(angle);

            return (
              <Text
                color={CLOCK.MARK.MM.COLOR}
                font={CLOCK.MARK.FONT}
                fontSize={CLOCK.SIZE / 8}
                key={index}
                position={[x, y, SAFE_OFFSET]}
              >
                {index ? index : CLOCK.HH}
              </Text>
            );
          })}
      </group>
      <group name="Brand">
        <Text //
          color={CLOCK.BRAND.COLOR}
          font={CLOCK.BRAND.FONT}
          fontSize={CLOCK.SIZE / 10}
          position={[0, -CLOCK.SIZE / 3, SAFE_OFFSET]}
        >
          {BRAND_NAME}
        </Text>
      </group>
    </group>
  );
};

/**
 * Clock Hands.
 *
 * @returns {React.JSX.Element}
 */
const Hands = (): React.JSX.Element => {
  // States
  const [angleHandHours, setAngleHandHours] = React.useState<number>(0);
  const [angleHandMinutes, setAngleHandMinutes] = React.useState<number>(0);
  const [angleHandSeconds, setAngleHandSeconds] = React.useState<number>(0);

  // References.
  const handHourRef = useRef<Group>(null!);
  const handMinuteRef = useRef<Group>(null!);
  const handSecondRef = useRef<Group>(null!);

  const setTime = useCallback(() => {
    const d = new Date();
    const h = -(360 / CLOCK.HH) * (d.getHours() + d.getMinutes() / CLOCK.MM);
    const m = -(360 / CLOCK.MM) * d.getMinutes();
    const s = -(360 / CLOCK.SS) * d.getSeconds();

    setAngleHandHours(h);
    setAngleHandMinutes(m);
    setAngleHandSeconds(s);
  }, [setAngleHandHours, setAngleHandMinutes, setAngleHandSeconds]);

  useEffect(() => {
    const radians = MathUtils.degToRad(angleHandHours);
    handHourRef.current.rotation.z = radians;
  }, [angleHandHours]);

  useEffect(() => {
    const radians = MathUtils.degToRad(angleHandMinutes);
    handMinuteRef.current.rotation.z = radians;
  }, [angleHandMinutes]);

  useEffect(() => {
    const radians = MathUtils.degToRad(angleHandSeconds);
    handSecondRef.current.rotation.z = radians;
  }, [angleHandSeconds]);

  useFrame(() => {
    // Set time on each frame.
    setTime();
  });

  useLayoutEffect(() => {
    // Set time before first render.
    setTime();
  }, [setTime]);

  return (
    <group name="Hands" rotation={[0, 0, MathUtils.degToRad(ANGLE_START)]}>
      <group
        name="Shaft"
        position={[0, 0, CLOCK.HAND.THICKNESS * 2.5 + SAFE_OFFSET]}
      >
        <mesh
          castShadow={true}
          receiveShadow={true}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry
            args={[
              CLOCK.HAND.THICKNESS,
              CLOCK.HAND.THICKNESS * 3,
              CLOCK.HAND.THICKNESS * 5,
              CLOCK.HH * 4,
            ]}
          />
          <meshStandardMaterial />
        </mesh>
      </group>
      <group
        name="Hour Hand"
        position={[0, 0, CLOCK.HAND.THICKNESS]}
        ref={handHourRef}
      >
        <mesh
          castShadow={true}
          position={[CLOCK.HAND.HH.LENGTH / 2, 0, 0]}
          receiveShadow={true}
        >
          <boxGeometry
            args={[
              CLOCK.HAND.HH.LENGTH,
              CLOCK.HAND.HH.WIDTH,
              CLOCK.HAND.THICKNESS,
            ]}
          />
          <meshStandardMaterial color={CLOCK.HAND.HH.COLOR} />
        </mesh>
      </group>
      <group
        name="Minute Hand"
        position={[0, 0, CLOCK.HAND.THICKNESS * 2.5]}
        ref={handMinuteRef}
      >
        <mesh
          castShadow={true}
          position={[CLOCK.HAND.MM.LENGTH / 2, 0, 0]}
          receiveShadow={true}
        >
          <boxGeometry
            args={[
              CLOCK.HAND.MM.LENGTH,
              CLOCK.HAND.MM.WIDTH,
              CLOCK.HAND.THICKNESS,
            ]}
          />
          <meshStandardMaterial color={CLOCK.HAND.MM.COLOR} />
        </mesh>
      </group>
      <group
        name="Second Hand"
        position={[0, 0, CLOCK.HAND.THICKNESS * 4]}
        ref={handSecondRef}
      >
        <mesh castShadow={true} position={[CLOCK.HAND.SS.LENGTH / 2, 0, 0]}>
          <boxGeometry
            args={[
              CLOCK.HAND.SS.LENGTH,
              CLOCK.HAND.SS.WIDTH,
              CLOCK.HAND.THICKNESS,
            ]}
          />
          <meshStandardMaterial color={CLOCK.HAND.SS.COLOR} />
        </mesh>
      </group>
    </group>
  );
};

/**
 * Analogue Clock.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const ClockAnalogue = (props: GroupProps): React.JSX.Element => {
  return (
    <group name="Analogue Clock" {...props}>
      <Face />
      <Hands />
    </group>
  );
};

export { ClockAnalogue as Clock };
