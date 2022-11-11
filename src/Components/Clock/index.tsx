import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { ClockAnalogue as Analogue } from "Components/Clock/Analogue";
import { ClockDigital as Digital } from "Components/Clock/Digital";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Clock.
 *
 * @param {GroupProps} props
 * @returns {JSX.Element}
 */
const Clock = (props: GroupProps): JSX.Element => {
  const { showClock } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      showClock: {
        label: "Clock",
        options: {
          Analogue: <Analogue />,
          Digital: <Digital />,
        },
      },
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return (
    <group name="Clock" {...props}>
      {showClock}
    </group>
  );
};

export { Clock };
