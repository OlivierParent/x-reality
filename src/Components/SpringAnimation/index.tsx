import {
  MeshTransmissionMaterial,
  useCursor,
  useMatcapTexture,
} from "@react-three/drei";
import { GroupProps, ThreeEvent } from "@react-three/fiber";
import { useMotionValueEvent, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useCallback, useEffect, useState } from "react";
import { DoubleSide, Vector3 } from "three";

import { SPRING } from "Components/SpringAnimation/SpringAnimation.config";
import { MATCAP } from "Libs/matcap";

const ZERO_VECTOR = new Vector3();
const position = new Vector3();

let opacity: number = SPRING.OPACITY.MINIMUM;

/**
 * Spring-based Animation.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const SpringAnimation = (props: GroupProps): JSX.Element => {
  // Matcap Textures.
  const [greenMatcapTexture] = useMatcapTexture(
    MATCAP.ID.GREEN,
    MATCAP.SIZE.XL
  );

  // Springs.
  const angleSpringNormalised = useSpring(SPRING.NORMALISED.MINIMUM, {
    damping: SPRING.SETTINGS.DAMPING,
    mass: SPRING.SETTINGS.MASS,
    stiffness: SPRING.SETTINGS.STIFFNESS,
  });

  // States.
  const [angleNormalised, setAngleNormalised] = useState(
    SPRING.NORMALISED.MINIMUM
  );
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
      position.set(0, 0, -0.5);
      opacity = SPRING.OPACITY.MAXIMUM;
    } else {
      angleSpringNormalised.set(SPRING.NORMALISED.MINIMUM);
      position.set(0, 0, 0);
      opacity = SPRING.OPACITY.MINIMUM;
    }
  }, [isToggled, angleSpringNormalised]);

  useMotionValueEvent(angleSpringNormalised, "change", (latest) => {
    setAngleNormalised(latest);
  });

  return (
    <group name="Spring" {...props}>
      <motion.group //
        animate={{ ...position }}
        initial={{ ...position }}
      >
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
            anisotropicBlur={0.5}
            distortion={0.5}
            distortionScale={0.5}
            emissive="green"
            emissiveIntensity={0.25}
            temporalDistortion={0.1}
            wireframe={false}
          />
        </mesh>
        <mesh //
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
        </mesh>
      </motion.group>
    </group>
  );
};

export { SpringAnimation };
