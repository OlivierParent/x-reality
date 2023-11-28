import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Button as ButtonDefault } from "Components/Button/Default";
import { Button as ButtonGreenSock } from "Components/Button/GreenSock";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

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
  const { button } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      button: {
        label: "Button",
        options: BUTTON,
        value: BUTTON.GreenSock,
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <group name="Button" {...props}>
      {button}
    </group>
  );
};

export { Button };
