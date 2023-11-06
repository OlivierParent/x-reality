import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Default } from "Components/Button/Default";
import { GreenSock } from "Components/Button/GreenSock";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const BUTTON = Object.freeze({
  Default: <Default />,
  GreenSock: <GreenSock />,
});

const Button = (props: GroupProps): JSX.Element => {
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
