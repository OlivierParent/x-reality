import { useControls } from "leva";

import { Logo as LogoDouble } from "Components/Logo/Double";
import { Logo as LogoSingle } from "Components/Logo/Single";

const LOGO = {
  Double: <LogoDouble />,
  Single: <LogoSingle />,
} as const;

/**
 * Logo.
 *
 * @returns {React.JSX.Element}
 */
const Logo = (): React.JSX.Element => {
  const { logo } = useControls("Components", {
    logo: {
      label: "Logo",
      options: LOGO,
      value: LOGO.Single,
    },
  });

  return <group name="Logos">{logo}</group>;
};

export { Logo };
