import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Clock as ClockAnalogue } from "Components/Clock/Analogue";
import { Clock as ClockDigital } from "Components/Clock/Digital";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

/**
 * Clock.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Clock = (props: GroupProps): React.JSX.Element => {
  // Leva.
  const { showClock } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      showClock: {
        label: "Clock",
        options: {
          Analogue: <ClockAnalogue />,
          Digital: <ClockDigital />,
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
