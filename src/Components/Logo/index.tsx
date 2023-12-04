import { GroupProps } from "@react-three/fiber";

import { Logo as LogoDouble } from "Components/Logo/Double";
import { Logo as LogoSingle } from "Components/Logo/Single";
import { useLeva } from "Hooks/Leva/Logo";

const LOGO = {
  Double: <LogoDouble />,
  Single: <LogoSingle />,
} as const;

/**
 * Logo.
 *
 *  @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Logo = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { logo } = useLeva(LOGO);

  return (
    <group name="Logos" {...props}>
      {logo}
    </group>
  );
};

export { Logo };
