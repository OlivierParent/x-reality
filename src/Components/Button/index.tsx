import { GroupProps } from "@react-three/fiber";

import { Button as ButtonDefault } from "Components/Button/Default";
import { Button as ButtonGreenSock } from "Components/Button/GreenSock";
import { useLeva } from "Hooks/Leva/Button";

const BUTTON = {
  Default: <ButtonDefault />,
  GreenSock: <ButtonGreenSock />,
} as const;

/**
 * Button.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Button = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { button } = useLeva(BUTTON);

  return (
    <group name="Button" {...props}>
      {button}
    </group>
  );
};

export { Button };
