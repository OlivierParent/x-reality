import { GroupProps } from "@react-three/fiber";

import { Logo as LogoDouble } from "Components/Logo/Double";
import { Logo as LogoSingle } from "Components/Logo/Single";
import { LEVA_OPTION, useLeva } from "Hooks/Leva/Logo";

const LEVA_OPTIONS = {
  [LEVA_OPTION.DOUBLE]: <LogoDouble />,
  [LEVA_OPTION.SINGLE]: <LogoSingle />,
} as const;

/**
 * Logo.
 *
 *  @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Logo = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { logo } = useLeva(LEVA_OPTIONS, LEVA_OPTIONS[LEVA_OPTION.DOUBLE]);

  return (
    <group name="Logos" {...props}>
      {logo}
    </group>
  );
};

export { Logo };
