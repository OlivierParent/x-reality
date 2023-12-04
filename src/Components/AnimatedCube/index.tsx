import { GroupProps } from "@react-three/fiber";

import { AnimatedCube as AnimatedCubeDefault } from "Components/AnimatedCube/Default";
import { AnimatedCube as AnimatedCubeGreenSock } from "Components/AnimatedCube/GreenSock";
import { useLeva } from "Hooks/Leva/AnimatedCube";

const ANIMATED_CUBE = {
  Default: <AnimatedCubeDefault />,
  GreenSock: <AnimatedCubeGreenSock />,
} as const;

/**
 * Animated Cube.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const AnimatedCube = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { cube } = useLeva(ANIMATED_CUBE);

  return (
    <group name="Animated Cube" {...props}>
      {cube}
    </group>
  );
};

export { AnimatedCube };
