import {
  Circle,
  Cone,
  Cylinder,
  Plane,
  Ring,
  Text,
  Torus,
  useMatcapTexture,
} from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { BackSide, MathUtils } from "three";

import { FONT_FAMILY } from "Libs/font";
import { MATCAP } from "Libs/matcap";

type GaugeDefaultProps = {
  config: {
    ANGLE: {
      OFFSET: number;
      RANGE: number;
    };
    LEGEND: string;
    MARK: {
      CAUTION: string;
      DANGER: string;
      SAFE: string;
      SUBDIVISION: number;
    };
    VALUE: {
      CAUTION: number;
      DANGER: number;
      MARK_VALUE: number;
      MAXIMUM: number;
      MINIMUM: number;
      SAFE: number;
    };
  };
  percentage: number;
  size: number;
};

const CLOCKWISE = -1;

/**
 * Gauge.
 *
 * @param {GroupProps & GaugeDefaultProps} props
 * @returns {React.JSX.Element}
 */
const Gauge = (props: GroupProps & GaugeDefaultProps): React.JSX.Element => {
  const {
    config: GAUGE, //
    percentage,
    size: SIZE,
  } = props;

  // Matcap Textures.
  const [buffedSilverMatcapTexture] = useMatcapTexture(
    MATCAP.ID.BUFFED_SILVER,
    MATCAP.SIZE.XL
  );
  const [graphiteMatcapTexture] = useMatcapTexture(
    MATCAP.ID.GRAPHITE, //
    MATCAP.SIZE.XL
  );
  const [titaniumMatcapTexture] = useMatcapTexture(
    MATCAP.ID.TITANIUM, //
    MATCAP.SIZE.XL
  );

  const CIRCLE = SIZE * 0.8;
  const LENGTH_LG = SIZE * 0.1;
  const LENGTH_SM = SIZE * 0.06;
  const SAFE_OFFSET = SIZE * 0.001; // Prevent Z Fighting.
  const THICKNESS_LG = SIZE * 0.01;
  const THICKNESS_SM = SIZE * 0.005;
  const AngleOffset = MathUtils.degToRad(
    GAUGE.ANGLE.OFFSET + GAUGE.ANGLE.RANGE / 2
  );
  const MarkSteps =
    (GAUGE.VALUE.MAXIMUM / GAUGE.VALUE.MARK_VALUE) * GAUGE.MARK.SUBDIVISION;
  const AngleStep = MathUtils.degToRad(GAUGE.ANGLE.RANGE) / GAUGE.VALUE.MAXIMUM;
  const ValueStep = GAUGE.VALUE.MAXIMUM / MarkSteps;

  const MARKS = Array(MarkSteps + 1).fill(null);

  return (
    <group name="Gauge" {...props}>
      <group name="Face">
        <Circle args={[SIZE, 60]}>
          <meshMatcapMaterial matcap={graphiteMatcapTexture} />
        </Circle>
        <group position={[0, -SIZE * 0.6, SAFE_OFFSET]}>
          <Text fontSize={SIZE * 0.15} font={FONT_FAMILY.CODA.url}>
            {GAUGE.LEGEND}
          </Text>
        </group>
      </group>
      <group rotation={[0, 0, AngleOffset]}>
        <group name="Rings" position={[0, 0, SAFE_OFFSET]}>
          <Ring
            name="Default"
            args={[
              CIRCLE,
              CIRCLE + THICKNESS_LG,
              GAUGE.VALUE.MAXIMUM * 2,
              1,
              GAUGE.VALUE.MINIMUM * CLOCKWISE * AngleStep,
              (GAUGE.VALUE.MAXIMUM - GAUGE.VALUE.MINIMUM) *
                CLOCKWISE *
                AngleStep,
            ]}
          >
            <meshBasicMaterial color="white" side={BackSide} />
          </Ring>
          <Ring
            name="Safe"
            args={[
              CIRCLE - 2 * THICKNESS_LG,
              CIRCLE - 1 * THICKNESS_LG,
              GAUGE.VALUE.MAXIMUM * 2,
              1,
              GAUGE.VALUE.SAFE * CLOCKWISE * AngleStep,
              (GAUGE.VALUE.CAUTION - GAUGE.VALUE.SAFE) * CLOCKWISE * AngleStep,
            ]}
          >
            <meshBasicMaterial color="green" side={BackSide} />
          </Ring>
          <Ring
            name="Caution"
            args={[
              CIRCLE - 4 * THICKNESS_LG,
              CIRCLE - 1 * THICKNESS_LG,
              GAUGE.VALUE.MAXIMUM * 2,
              1,
              GAUGE.VALUE.CAUTION * CLOCKWISE * AngleStep,
              (GAUGE.VALUE.DANGER - GAUGE.VALUE.CAUTION) *
                CLOCKWISE *
                AngleStep,
            ]}
          >
            <meshBasicMaterial color="orange" side={BackSide} />
          </Ring>
          <Ring
            name="Danger"
            args={[
              CIRCLE - 7 * THICKNESS_LG,
              CIRCLE - 1 * THICKNESS_LG,
              GAUGE.VALUE.MAXIMUM * 2,
              1,
              GAUGE.VALUE.DANGER * CLOCKWISE * AngleStep,
              (GAUGE.VALUE.MAXIMUM - GAUGE.VALUE.DANGER) *
                CLOCKWISE *
                AngleStep,
            ]}
          >
            <meshBasicMaterial color="red" side={BackSide} />
          </Ring>
        </group>
        <group name="Marks" position={[0, 0, SAFE_OFFSET * 2]}>
          {MARKS.map((_, markIndex) => {
            const height =
              markIndex % GAUGE.MARK.SUBDIVISION === 0
                ? THICKNESS_LG
                : THICKNESS_SM;
            const width =
              markIndex % GAUGE.MARK.SUBDIVISION === 0 ? LENGTH_LG : LENGTH_SM;

            return (
              <group
                key={`mark-${markIndex}`}
                name="Mark"
                rotation={[0, 0, AngleStep * markIndex * CLOCKWISE]}
              >
                <Plane
                  args={[width, height]}
                  position={[CIRCLE - 1 * THICKNESS_LG - width / 2, 0, 0]}
                >
                  <meshBasicMaterial color={0xffffff} />
                </Plane>
              </group>
            );
          })}
        </group>
        <group name="Labels" position={[0, 0, SAFE_OFFSET * 2]}>
          {MARKS.map((_, markIndex) => {
            return (
              <group
                key={`label-${markIndex}`}
                name="Label"
                rotation={[0, 0, AngleStep * markIndex * CLOCKWISE]}
              >
                {markIndex % GAUGE.MARK.SUBDIVISION === 0 && (
                  <Text
                    font={FONT_FAMILY.CODA.url}
                    fontSize={SIZE * 0.1}
                    position={[SIZE * 0.88, 0, SAFE_OFFSET]}
                    rotation={[0, 0, MathUtils.degToRad(90) * CLOCKWISE]}
                  >
                    {Math.round(markIndex * ValueStep)}
                    <meshBasicMaterial color={0xffffff} />
                  </Text>
                )}
              </group>
            );
          })}
        </group>
        <group name="Needle" position={[0, 0, SIZE * 0.05]}>
          <Cylinder
            args={[SIZE * 0.1, SIZE * 0.05, SIZE * 0.1, 36]}
            castShadow={true}
            rotation={[-MathUtils.degToRad(90), 0, 0]}
          >
            <meshMatcapMaterial matcap={buffedSilverMatcapTexture} />
          </Cylinder>
          <group
            rotation={[
              0,
              0,
              MathUtils.degToRad(90 + (GAUGE.ANGLE.RANGE * percentage) / 100) *
                CLOCKWISE,
            ]}
          >
            <Cone args={[SIZE * 0.03, SIZE, 4]} position={[0, SIZE * 0.3, 0]}>
              <meshStandardMaterial
                color="orange"
                metalness={0.1}
                roughness={0.6}
              />
            </Cone>
          </group>
        </group>
        <group name="Rim">
          <Torus args={[SIZE * 0.975, SIZE * 0.025, 3, 120]}>
            <meshMatcapMaterial matcap={titaniumMatcapTexture} />
          </Torus>
        </group>
      </group>
    </group>
  );
};

export { Gauge };
