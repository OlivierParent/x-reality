import { useControls } from "leva";

import { Logo as LogoDefault } from "Components/Logo/Default";
import { Logo as LogoDouble } from "Components/Logo/Double";

const LOGO = Object.freeze({
  Default: <LogoDefault />,
  Double: <LogoDouble />,
});

const Logo = () => {
  const { logo } = useControls("Components", {
    logo: {
      label: "Logo",
      options: LOGO,
      value: LOGO.Default,
    },
  });

  return <group name="Logos">{logo}</group>;
};

export { Logo };
