import {
  MeshTransmissionMaterial,
  useCursor,
  useMatcapTexture,
} from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useSpring, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useCallback, useEffect, useState } from "react";
import { DoubleSide, MathUtils, Vector3 } from "three";

import { MATCAP } from "Libs/matcap";

const SPRING = {
  NORMALISED: {
    MAXIMUM: 350 / 360,
    MINIMUM: 10 / 360,
  },
  OPACITY: {
    MAXIMUM: 1,
    MINIMUM: 0.25,
  },
  RING: {
    PHI: { SEGMENTS: 1 },
    RADIUS: {
      INNER: 1.1,
      OUTER: 1.9,
    },
    THETA: {
      LENGTH: Math.PI * 2,
      SEGMENTS: 64,
      START: Math.PI / 2,
    },
  },
  SETTINGS: {
    DAMPING: 20,
    STIFFNESS: 200,
  },
  TORUS: {
    ARC: MathUtils.degToRad(360),
    RADIUS: 1.5,
    SEGMENTS: {
      RADIAL: 32,
      TUBULAR: 64,
    },
    TUBE: 0.5,
  },
} as const;

const ZERO_VECTOR = new Vector3();
const position = new Vector3();

let opacity: number = SPRING.OPACITY.MINIMUM;

/**
 * Spring.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Spring = (props: GroupProps): React.JSX.Element => {
  // Matcap Textures.
  const [greenMatcapTexture] = useMatcapTexture(
    MATCAP.ID.GREEN,
    MATCAP.SIZE.XL
  );

  // Springs.
  const angleSpringNormalised = useSpring(SPRING.NORMALISED.MINIMUM, {
    damping: SPRING.SETTINGS.DAMPING,
    stiffness: SPRING.SETTINGS.STIFFNESS,
  });

  // States.
  const [angleNormalised, setAngleNormalised] = useState(
    SPRING.NORMALISED.MINIMUM
  );
  const [isToggled, setIsToggled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers.
  const clickHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsToggled((state) => !state);
  }, []);
  const pointerOutHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
  }, []);
  const pointerOverHandler = useCallback((event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    setIsHovered(true);
  }, []);

  // Cursor on hover.
  useCursor(isHovered);

  useEffect(() => {
    if (isToggled) {
      angleSpringNormalised.set(SPRING.NORMALISED.MAXIMUM);
      opacity = SPRING.OPACITY.MAXIMUM;
      position.set(0, 0, 0.5);
    } else {
      angleSpringNormalised.set(SPRING.NORMALISED.MINIMUM);
      opacity = SPRING.OPACITY.MINIMUM;
      position.set(0, 0, 0);
    }
  }, [isToggled, angleSpringNormalised]);

  useMotionValueEvent(angleSpringNormalised, "change", (latest) => {
    setAngleNormalised(latest);
  });

  return (
    <group name="Spring" {...props}>
      <mesh
        name="Torus"
        onClick={clickHandler}
        onPointerOut={pointerOutHandler}
        onPointerOver={pointerOverHandler}
        position={ZERO_VECTOR}
      >
        <torusGeometry
          args={[
            SPRING.TORUS.RADIUS,
            SPRING.TORUS.TUBE,
            SPRING.TORUS.SEGMENTS.RADIAL,
            SPRING.TORUS.SEGMENTS.TUBULAR,
            SPRING.TORUS.ARC,
          ]}
        />
        <MeshTransmissionMaterial
          emissive={"green"}
          emissiveIntensity={0.25}
          distortionScale={0.5}
          temporalDistortion={0.0}
          wireframe={false}
        />
      </mesh>
      <motion.mesh //
        animate={{ ...position }}
        initial={{ ...position }}
        name="Ring"
      >
        <ringGeometry
          args={[
            SPRING.RING.RADIUS.INNER,
            SPRING.RING.RADIUS.OUTER,
            SPRING.RING.THETA.SEGMENTS,
            SPRING.RING.PHI.SEGMENTS,
            SPRING.RING.THETA.START,
            SPRING.RING.THETA.LENGTH * angleNormalised,
          ]}
        />
        <motion.meshMatcapMaterial
          animate={{ opacity }}
          initial={{ opacity: SPRING.OPACITY.MINIMUM }}
          matcap={greenMatcapTexture}
          side={DoubleSide}
          transparent={true}
        />
      </motion.mesh>
    </group>
  );
};

export { Spring };
