import { GroupProps } from "@react-three/fiber";

import { Button as ButtonDefault } from "Components/Button/Default";
import { Button as ButtonFramerMotion3d } from "Components/Button/FramerMotion3d";
import { Button as ButtonGreenSock } from "Components/Button/GreenSock";
import { useLeva } from "Hooks/Leva/Button";

const LEVA_OPTIONS = {
  "\u2014Default\u2014": <ButtonDefault />,
  "Framer Motion 3D": <ButtonFramerMotion3d />,
  "GreenSock GSAP": <ButtonGreenSock />,
} as const;

/**
 * Button.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Button = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { button } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS["Framer Motion 3D"]);

  return (
    <group name="Button" {...props}>
      {button}
    </group>
  );
};

export { Button };
