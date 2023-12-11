import { GroupProps } from "@react-three/fiber";

import { Logo as LogoDouble } from "Components/Logo/Double";
import { Logo as LogoSingle } from "Components/Logo/Single";
import { useLeva } from "Hooks/Leva/Logo";

const LEVA_OPTIONS = {
  "Double\u0000": <LogoDouble />,
  "Single\u0000": <LogoSingle />,
} as const;

/**
 * Logo.
 *
 *  @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Logo = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { logo } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS["Single\u0000"]);

  return (
    <group name="Logos" {...props}>
      {logo}
    </group>
  );
};

export { Logo };
