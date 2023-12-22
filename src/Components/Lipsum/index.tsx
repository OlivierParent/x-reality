import { GroupProps } from "@react-three/fiber";

import { Lipsum as LipsumDefault } from "Components/Lipsum/Default";
import { Lipsum as LipsumFonts } from "Components/Lipsum/Fonts";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Lipsum";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DEFAULT]: <LipsumDefault />,
  [LEVA_OPTION.FONTS]: <LipsumFonts />,
} as const;

/**
 * Lorem ipsum text.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Lipsum = (props: GroupProps): JSX.Element => {
  // Leva Controls.
  const { lipsum } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS[LEVA_OPTION.DEFAULT]);

  return (
    <group name="Lipsum" {...props}>
      {lipsum}
    </group>
  );
};

export { Lipsum };
