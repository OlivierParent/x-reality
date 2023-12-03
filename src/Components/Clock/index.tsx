import { GroupProps } from "@react-three/fiber";
import { useControls } from "leva";

import { Clock as ClockAnalogue } from "Components/Clock/Analogue";
import { Clock as ClockDigital } from "Components/Clock/Digital";
import { LEVA } from "Configs/leva";
import { SettingsLeva } from "Settings/Leva";

const CLOCK = {
  Analogue: <ClockAnalogue />,
  Digital: <ClockDigital />,
} as const;

/**
 * Clock.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Clock = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { showClock } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      showClock: {
        label: "Clock",
        options: CLOCK,
        value: CLOCK.Analogue,
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
