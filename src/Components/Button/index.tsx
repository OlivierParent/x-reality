import { GroupProps } from "@react-three/fiber";

import { Button as ButtonDefault } from "Components/Button/Default";
import { Button as ButtonFramerMotion3d } from "Components/Button/FramerMotion3d";
import { Button as ButtonGreenSock } from "Components/Button/GreenSock";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Button";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DEFAULT]: <ButtonDefault />,
  [LEVA_OPTION.FRAMER_MOTION_3D]: <ButtonFramerMotion3d />,
  [LEVA_OPTION.GREENSOCK_GSAP]: <ButtonGreenSock />,
} as const;

/**
 * Button.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Button = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { button } = useLeva(
    LEVA_OPTIONS,
    LEVA_OPTIONS[LEVA_OPTION.FRAMER_MOTION_3D]
  );

  return (
    <group name="Button" {...props}>
      {button}
    </group>
  );
};

export { Button };
