import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Default } from "Components/Button/Default";
import { Spring } from "Components/Button/Spring";
import { LEVA } from "Configs/leva";

const BUTTON = Object.freeze({
  Default: <Default />,
  Spring: <Spring />,
});

const Button = (props: GroupProps): JSX.Element => {
  const { button } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      button: {
        label: "Button",
        options: BUTTON,
        value: BUTTON.Default,
      },
    },
    {
      collapsed: false,
      color: undefined,
      order: LEVA.ORDER.COMPONENTS,
    }
  );

  return (
    <group name="Button" {...props}>
      {button}
    </group>
  );
};

export { Button };
