import { GroupProps } from "@react-three/fiber";

import { Animation as AnimationDefault } from "Components/Animation/Default";
import { Animation as AnimationSuzanne } from "Components/Animation/Suzanne";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Animation";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DEFAULT]: <AnimationDefault />,
  [LEVA_OPTION.SUZANNE]: <AnimationSuzanne />,
} as const;

/**
 * Animated Cube.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Animation = (props: GroupProps): JSX.Element => {
  // Leva Controls.
  const { animation } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.DEFAULT]
  );

  return (
    <group name="Animation" {...props}>
      {animation}
    </group>
  );
};

export { Animation };
