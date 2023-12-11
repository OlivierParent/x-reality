import { GroupProps } from "@react-three/fiber";

import { Clock as ClockAnalogue } from "Components/Clock/Analogue";
import { Clock as ClockDigital } from "Components/Clock/Digital";
import { useLeva } from "Hooks/Leva/Clock";

const LEVA_OPTIONS = {
  "Analogue\u0000": <ClockAnalogue />,
  "Digital\u0000": <ClockDigital />,
} as const;

/**
 * Clock.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Clock = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { clock } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS["Analogue\u0000"]);

  return (
    <group name="Clock" {...props}>
      {clock}
    </group>
  );
};

export { Clock };
