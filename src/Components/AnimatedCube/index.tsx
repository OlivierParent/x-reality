import { GroupProps } from "@react-three/fiber";

import { AnimatedCube as AnimatedCubeDefault } from "Components/AnimatedCube/Default";
import { AnimatedCube as AnimatedCubeFramerMotion3d } from "Components/AnimatedCube/FramerMotion3d";
import { AnimatedCube as AnimatedCubeGreenSock } from "Components/AnimatedCube/GreenSock";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/AnimatedCube";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DEFAULT]: <AnimatedCubeDefault />,
  [LEVA_OPTION.FRAMER_MOTION_3D]: <AnimatedCubeFramerMotion3d />,
  [LEVA_OPTION.GREENSOCK_GSAP]: <AnimatedCubeGreenSock />,
} as const;

/**
 * Animated Cube.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const AnimatedCube = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { cube } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.FRAMER_MOTION_3D]
  );

  return (
    <group name="Animated Cube" {...props}>
      {cube}
    </group>
  );
};

export { AnimatedCube };
